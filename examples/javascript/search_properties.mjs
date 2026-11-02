// Preview an area search, then run it with the Homesage.ai Real Estate APIs.
//
// The preview costs 0 credits. The search costs 1 credit per property returned,
// so it runs only when you pass --run. Needs Node.js 18 or later.
//
//   export HOMESAGE_API_KEY=your_api_key
//   node search_properties.mjs
//   node search_properties.mjs --run

const API_BASE_URL = 'https://developers.homesage.ai';
const FILTERS = {
  location: JSON.stringify([{ type: 'city', city: 'Austin', state_code: 'TX' }]),
  property_status: 'active',
  price_max: '500000',
  property_condition: 'outdated|poor',
};

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function check(response) {
  if (response.status === 401) fail('The API key is missing or invalid.');
  if (response.status === 402) fail('No active plan or not enough credits. See https://homesage.ai/pricing');
  if (!response.ok) fail(`Request failed with status ${response.status}.`);
  return response.json();
}

const apiKey = process.env.HOMESAGE_API_KEY;
if (!apiKey) fail('Set HOMESAGE_API_KEY. Create a key at https://app.homesage.ai/api-portal/keys');
const headers = { Authorization: `Bearer ${apiKey}` };

const previewUrl = new URL('/api/workspace/search/count/', API_BASE_URL);
previewUrl.search = new URLSearchParams(FILTERS).toString();
const preview = await check(await fetch(previewUrl, { headers, signal: AbortSignal.timeout(60_000) }));
console.log(`${preview.count} properties match. The search costs ${preview.cost} credits.`);

if (!process.argv.includes('--run')) {
  console.log('Pass --run to run the search.');
  process.exit(0);
}

const results = await check(
  await fetch(new URL('/api/workspace/search/', API_BASE_URL), {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...FILTERS, price_max: Number(FILTERS.price_max) }),
    signal: AbortSignal.timeout(300_000),
  }),
);
console.log(`Charged ${results.charged} credits. ${results.credits_left} credits left.`);
for (const property of results.data.slice(0, 5)) console.log(property.address);
