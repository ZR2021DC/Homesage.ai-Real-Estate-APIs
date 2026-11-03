// Score property condition from photos and estimate renovation cost.
//
// Costs 2 credits for condition and 5 credits for renovation cost.
// Needs Node.js 18 or later.
//
//   export HOMESAGE_API_KEY=your_api_key
//   node condition_and_rehab.mjs "4411 E Hidden Oak St Springfield MO 65802"

const API_BASE_URL = 'https://api.homesage.ai';
const DEFAULT_ADDRESS = '4411 E Hidden Oak St Springfield MO 65802';

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function getJson(path, address, apiKey) {
  const url = new URL(path, API_BASE_URL);
  url.searchParams.set('property_address', address);

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
    signal: AbortSignal.timeout(60_000),
  });

  if (response.status === 401) fail('The API key is missing or invalid.');
  if (response.status === 402) fail('No active plan or not enough credits. See https://homesage.ai/pricing/');
  if (response.status === 404) {
    const { did_you_mean: matches = [] } = await response.json();
    fail(`No exact match. Close matches: ${matches.map((m) => m.address).join(', ')}`);
  }
  if (!response.ok) fail(`Request failed with status ${response.status}.`);
  return response.json();
}

const apiKey = process.env.HOMESAGE_API_KEY;
if (!apiKey) fail('Set HOMESAGE_API_KEY. Create a key at https://app.homesage.ai/api-portal/keys');

const address = process.argv[2] ?? DEFAULT_ADDRESS;
const condition = await getJson('/api/properties/property-condition/', address, apiKey);
const rehab = await getJson('/api/properties/renovation/cost/', address, apiKey);

console.log('Condition:', condition.property_condition);
console.log('Estimated renovation cost:', rehab.renovation_cost);
