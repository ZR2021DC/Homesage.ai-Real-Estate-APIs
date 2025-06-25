# Bulk Property Search

This powerful endpoint allows you to search for properties in bulk based on a wide range of filters. You can retrieve a list of properties matching your specific investment criteria, such as location, price range, size, and even investment potential.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/bulk-property-info/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

Use the following query parameters to build your search query. At least one location parameter (`city`, `state`, or `zip`) is required.

| Parameter              | Type                          | Description                                                                                             | Example                          |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `state`                | `string`                      | **Required** (if no `city` or `zip`). The two-letter state code.                                        | `TX`                             |
| `city`                 | `string`                      | **Required** (if no `state` or `zip`). The city name.                                                   | `Austin`                         |
| `zip`                  | `string`                      | **Required** (if no `city` or `state`). The 5-digit zip code.                                             | `78701`                          |
| `property_status`      | `string`                      | The listing status. Can be `Active` or `Sold`. Defaults to `Active`.                                    | `Active`                         |
| `price_range_min`      | `integer`                     | The minimum list price.                                                                                 | `300000`                         |
| `price_range_max`      | `integer`                     | The maximum list price.                                                                                 | `750000`                         |
| `beds_min`             | `integer`                     | The minimum number of bedrooms.                                                                         | `3`                              |
| `beds_max`             | `integer`                     | The maximum number of bedrooms.                                                                         | `5`                              |
| `baths_min`            | `float`                       | The minimum number of bathrooms.                                                                        | `2.5`                            |
| `baths_max`            | `float`                       | The maximum number of bathrooms.                                                                        | `4`                              |
| `sqft_min`             | `integer`                     | The minimum square footage of the living area.                                                          | `1500`                           |
| `sqft_max`             | `integer`                     | The maximum square footage of the living area.                                                          | `3000`                           |
| `lot_sqft_min`         | `integer`                     | The minimum square footage of the lot.                                                                  | `5000`                           |
| `lot_sqft_max`         | `integer`                     | The maximum square footage of the lot.                                                                  | `10000`                          |
| `year_built_min`       | `integer`                     | The minimum year the property was built.                                                                | `1990`                           |
| `year_built_max`       | `integer`                     | The maximum year the property was built.                                                                | `2020`                           |
| `dom_max`              | `integer`                     | The maximum days a property has been on the market. Only for `Active` status.                           | `60`                             |
| `property_type`        | `string`                      | A comma-separated list of property types. (e.g., `detached`, `townhouse`, `condo/co-op/apartment`)       | `detached,townhouse`             |
| `investment_potential` | `string`                      | A comma-separated list of potential ratings. (e.g., `excellent`, `high`, `good`)                        | `excellent,high`                 |
| `property_condition`   | `string`                      | A pipe-separated list of property conditions. (e.g., `good`, `outdated`, `poor`)                        | `good|outdated`                  |
| `updated_since`        | `string`                      | Retrieve properties updated after a specific time. Use ISO 8601 format (UTC).                           | `2023-10-26T10:00:00Z`           |

---

## Example Request

Here is an example using cURL to find 3-bedroom, single-family homes in Austin, TX under $750,000.

```bash
curl -X GET "https://your-api-domain.com/api/properties/bulk-property-info/?state=TX&city=Austin&price_range_max=750000&beds_min=3&property_type=detached" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

A successful request returns a JSON array of property objects.

```json
[
    {
        "property_id": "M123456789",
        "address": {
            "line": "123 Main St",
            "city": "Austin",
            "state_code": "TX",
            "postal_code": "78704"
        },
        "status": "Active",
        "list_price": 725000,
        "description": {
            "beds": 3,
            "baths": 2.5,
            "sqft": 1950,
            "year_built": 1998,
            "type": "detached"
        },
        "dom": 35,
        "potential": "High",
        "roi": 14.8,
        "pfs": 8.2,
        "last_update_date": "2023-11-01T12:30:00Z",
        "primary_photo": {
            "href": "https://image-url.com/photo.jpg"
        }
    }
]
```

---

## Example Error Response

If your subscription does not have enough credits for the number of properties found, you will receive an error.

```json
{
    "error": "Not enough credits. Found 542 properties, requires 542 credits."
}
``` 