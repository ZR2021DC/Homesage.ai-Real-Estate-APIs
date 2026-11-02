# Homesage.ai Real Estate APIs

[![API docs](https://img.shields.io/badge/API_docs-%235177fc)](https://app.homesage.ai/docs)
[![MCP](https://img.shields.io/badge/MCP-%235177fc)](https://homesage.ai/products/real-estate-mcps/)
[![Pricing](https://img.shields.io/badge/Pricing-%235177fc)](https://homesage.ai/pricing)
[![Website](https://img.shields.io/badge/Homesage.ai-%235177fc)](https://homesage.ai)

Property data, valuations and investment analysis for 155M+ US properties and 200B+ data points. Call 30+ REST endpoints from your own code, or connect the MCP to Claude, ChatGPT, Gemini or Cursor.

- **Look up a property:** property record, estimated value, value history and condition score.
- **Run the numbers:** comps, ARV, renovation cost, and flip and rental returns.
- **Search an area:** filter a city, county or ZIP by price, condition, ROI and rent.
- **Check the risk:** market outlook, location red flags, and mortgage and lien data.
- **Reach the owner:** owner contacts and associated people for a property address.

## Quickstart

1. [Create an account](https://app.homesage.ai/signup) and choose a plan on the [pricing page](https://homesage.ai/pricing).
2. Create an API key on the [Keys page](https://app.homesage.ai/api-portal/keys).
3. Send the key in the `Authorization: Bearer` header:

```bash
curl 'https://developers.homesage.ai/api/properties/info/?property_address=4411%20E%20Hidden%20Oak%20St%20Springfield%20MO%2065802' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

The base URL is `https://developers.homesage.ai`. Every endpoint returns JSON.

## Code examples

The [`examples`](./examples) folder has two flows in Python and JavaScript:

| Flow | Python | JavaScript |
| --- | --- | --- |
| Look up one property | [`property_lookup.py`](./examples/python/property_lookup.py) | [`property_lookup.mjs`](./examples/javascript/property_lookup.mjs) |
| Preview, then run an area search | [`search_properties.py`](./examples/python/search_properties.py) | [`search_properties.mjs`](./examples/javascript/search_properties.mjs) |

## MCP

The MCP puts the same data inside your AI assistant. Add this URL to the assistant, sign in once, and ask in plain words. You need no API key.

```text
https://api.homesage.ai/mcp
```

**Claude (web or desktop)**

1. Open Customize → Connectors.
2. Click the "+", then "Add custom connector".
3. Paste the URL, click Add, then Connect, and sign in.

On Team or Enterprise plans, an admin adds the connector once in organization settings first.

**ChatGPT**

1. Open Settings → Apps → Advanced and turn on Developer mode.
2. Go to Settings → Connectors → Create.
3. Paste the URL, name it, create it, and sign in when prompted.

**Gemini CLI**

```bash
gemini mcp add --transport http homesage https://api.homesage.ai/mcp
```

Run it, then approve the browser sign-in.

**Cursor and most other clients**

In Cursor, open Settings → Tools & Integrations → New MCP Server. Add the server to `mcp.json`:

```json
{
  "mcpServers": {
    "homesage": {
      "url": "https://api.homesage.ai/mcp"
    }
  }
}
```

**VS Code (Copilot)**

VS Code uses the same shape with a `servers` root key and a `type`:

```json
{
  "servers": {
    "homesage": {
      "type": "http",
      "url": "https://api.homesage.ai/mcp"
    }
  }
}
```

Read more on the [MCP page](https://homesage.ai/products/real-estate-mcps/).

## Endpoints

The endpoints sit in 8 categories. The [endpoint index](./docs/README.md) lists each one with its credit price and a link to its live docs page.

| Category | What it covers |
| --- | --- |
| [Property Search](https://app.homesage.ai/docs/property-search) | Area lookup, search preview and filtered search |
| [Property Lookup](https://app.homesage.ai/docs/property-lookup) | Address suggestions and property records |
| [Property Valuation](https://app.homesage.ai/docs/property-valuation) | Estimated value, scores, renovation, flip and rental returns |
| [AI-Powered Analysis](https://app.homesage.ai/docs/ai-powered-analysis) | Full report, condition, comps, renovation breakdown and solar |
| [Skip Tracing](https://app.homesage.ai/docs/skip-tracing) | Property owners and associated people |
| [Risk & Diligence](https://app.homesage.ai/docs/risk-and-diligence) | Location red flags |
| [Market Data](https://app.homesage.ai/docs/market-data) | Sold properties by ZIP, mortgage and lien data |
| [Account](https://app.homesage.ai/docs/account) | Credit balance |

## Credits and errors

One credit balance covers the web app, Sage (our AI assistant), the APIs and the MCP. Each endpoint page shows its credit price.

| Status | Meaning | Credits charged |
| --- | --- | --- |
| 401 | The API key is missing or invalid. | 0 |
| 402 | The account has no active plan or not enough credits. | 0 |
| 404 | The address has no confident match. The response lists close matches in `did_you_mean`. | 0 |

## Docs for agents

Every docs page has a Markdown version: add `.md` to its URL. The [OpenAPI spec](https://app.homesage.ai/openapi.json) and [`llms.txt`](https://app.homesage.ai/llms.txt) are public too.

## Contact

Questions? Email [contact@homesage.ai](mailto:contact@homesage.ai).
