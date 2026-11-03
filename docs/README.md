# Homesage.ai Real Estate APIs: endpoint index

This index lists each endpoint with its credit price. Each name links to its live docs page, which has parameters, response fields, a sample and errors.

All endpoints use the base URL `https://api.homesage.ai` and the `Authorization: Bearer YOUR_API_KEY` header.

## [Property Search](https://app.homesage.ai/docs/property-search)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Area suggestions](https://app.homesage.ai/docs/property-search/area-autocomplete) | `GET /api/area/autocomplete/` | 0 |
| [Search preview](https://app.homesage.ai/docs/property-search/preview-property-search) | `GET /api/workspace/search/count/` | 0 |
| [Property search](https://app.homesage.ai/docs/property-search/run-property-search) | `POST /api/workspace/search/` | 1 per property |

## [Property Lookup](https://app.homesage.ai/docs/property-lookup)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Address suggestions](https://app.homesage.ai/docs/property-lookup/auto-complete) | `GET /api/properties/auto-complete/` | 0 |
| [Property record](https://app.homesage.ai/docs/property-lookup/info) | `GET /api/properties/info/` | 2 |
| [Refreshed property record](https://app.homesage.ai/docs/property-lookup/updated-info) | `GET /api/properties/updated-info/` | 1 |
| [Bulk property info](https://app.homesage.ai/docs/property-lookup/bulk-info) | `GET /api/properties/bulk-info/` | 1 per property |

## [Property Valuation](https://app.homesage.ai/docs/property-valuation)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Current estimated value](https://app.homesage.ai/docs/property-valuation/current-estimate) | `GET /api/properties/current-estimate/` | 2 |
| [Value history](https://app.homesage.ai/docs/property-valuation/home-value-history) | `GET /api/properties/home_value_graph/` | 1 |
| [Seller Motivation Score](https://app.homesage.ai/docs/property-valuation/price-flexibility-score) | `GET /api/properties/pfs/` | 2 |
| [Investment potential](https://app.homesage.ai/docs/property-valuation/investment-potential) | `GET /api/properties/investment_potential/` | 3 |
| [Needs TLC check](https://app.homesage.ai/docs/property-valuation/needs-tlc-check) | `GET /api/properties/tlc/` | 1 |
| [Renovation cost](https://app.homesage.ai/docs/property-valuation/renovation-cost) | `GET /api/properties/renovation/cost/` | 5 |
| [Renovation return](https://app.homesage.ai/docs/property-valuation/renovation-return) | `GET /api/properties/renovation_return/` | 3 |
| [Flip return](https://app.homesage.ai/docs/property-valuation/flip-return) | `GET /api/properties/flip_return/` | 3 |
| [Long-term rental projection](https://app.homesage.ai/docs/property-valuation/rental-long-term) | `GET /api/properties/rental/long_term/` | 5 |
| [Short-term rental projection](https://app.homesage.ai/docs/property-valuation/rental-short-term) | `GET /api/properties/rental/short_term/` | 5 |

## [AI-Powered Analysis](https://app.homesage.ai/docs/ai-powered-analysis)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Full property report](https://app.homesage.ai/docs/ai-powered-analysis/full-report) | `GET /api/properties/full-report/` | 15 |
| [Property condition](https://app.homesage.ai/docs/ai-powered-analysis/property-condition) | `GET /api/properties/property-condition/` | 2 |
| [Property condition from your photos](https://app.homesage.ai/docs/ai-powered-analysis/property-condition-custom-photos) | `POST /api/properties/property-condition-custom-photos/` | 3 |
| [Comparable sold properties](https://app.homesage.ai/docs/ai-powered-analysis/comps) | `GET /api/properties/comps/` | 5 |
| [Line-item renovation cost breakdown](https://app.homesage.ai/docs/ai-powered-analysis/renovation-cost-breakdown) | `POST /api/properties/renovation-cost-breakdown/` | 5 |
| [Square feet per floor](https://app.homesage.ai/docs/ai-powered-analysis/sqft-per-floor) | `GET /api/properties/sqft-per-floor/` | 1 |
| [Market outlook](https://app.homesage.ai/docs/ai-powered-analysis/market-outlook) | `GET /api/properties/market-outlook/` | 2 |
| [Solar analysis](https://app.homesage.ai/docs/ai-powered-analysis/solar-analysis) | `GET /api/solar/analysis/` | 4 |

## [Skip Tracing](https://app.homesage.ai/docs/skip-tracing)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Property owner](https://app.homesage.ai/docs/skip-tracing/property-owner) | `POST /api/properties/skip-tracing/property-owner-information/` | 4 |
| [Associated people](https://app.homesage.ai/docs/skip-tracing/associated-people) | `POST /api/properties/skip-tracing/associated-people/` | 1 |
| [Person details](https://app.homesage.ai/docs/skip-tracing/person-details) | `POST /api/properties/skip-tracing/person-details/` | 1 |

## [Risk & Diligence](https://app.homesage.ai/docs/risk-and-diligence)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Location red flags](https://app.homesage.ai/docs/risk-and-diligence/location-red-flags) | `POST /api/properties/red-flags/stream/` | 5 |

## [Market Data](https://app.homesage.ai/docs/market-data)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Sold properties by ZIP](https://app.homesage.ai/docs/market-data/sold-by-zip) | `GET /api/properties/sold/by-zip/` | 1 per 20 properties |
| [Sold count by ZIP](https://app.homesage.ai/docs/market-data/sold-count-by-zip) | `GET /api/properties/sold/count-by-zip/` | 1 |
| [Mortgage and lien data](https://app.homesage.ai/docs/market-data/mortgage-lien-analysis) | `GET /api/mortgage-lien/analysis/` | 5 |

## [Account](https://app.homesage.ai/docs/account)

| Endpoint | Request | Credits |
| --- | --- | --- |
| [Credit balance](https://app.homesage.ai/docs/account/credit-balance) | `GET /api/usage/credits/` | 0 |

Prices can change. The live docs pages and the [pricing page](https://homesage.ai/pricing/) always show the current price.
