// Look up one US property with the Homesage.ai Real Estate APIs.
//
// Costs 2 credits per successful call. Needs Node.js 18 or later.
//
//   export HOMESAGE_API_KEY=your_api_key
//   node property_lookup.mjs "4411 E Hidden Oak St Springfield MO 65802"

const API_BASE_URL = 'https://api.homesage.ai';
const DEFAULT_ADDRESS = '4411 E Hidden Oak St Springfield MO 65802';

function fail(message) {
  console.error(message);
  process.exit(1);
}

const apiKey = process.env.HOMESAGE_API_KEY;
if (!apiKey) fail('Set HOMESAGE_API_KEY. Create a key at https://app.homesage.ai/api-portal/keys');

const url = new URL('/api/properties/info/', API_BASE_URL);
url.searchParams.set('property_address', process.argv[2] ?? DEFAULT_ADDRESS);

const response = await fetch(url, {
  headers: { Authorization: `Bearer ${apiKey}` },
  signal: AbortSignal.timeout(60_000),
});

if (response.status === 401) fail('The API key is missing or invalid.');
if (response.status === 402) fail('No active plan or not enough credits. See https://homesage.ai/pricing/');
if (response.status === 404) {
  // A 404 costs 0 credits. Retry with one of the close matches.
  const { did_you_mean: matches = [] } = await response.json();
  fail(`No exact match. Close matches: ${matches.map((m) => m.address).join(', ')}`);
}
if (!response.ok) fail(`Request failed with status ${response.status}.`);

const property = await response.json();
console.log(property.estimated_value);
