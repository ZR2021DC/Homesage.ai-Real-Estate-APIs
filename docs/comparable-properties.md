# Comparable Properties (Comps)

This endpoint provides a list of comparable properties (comps) for a subject property. Comps are crucial for valuation, helping you determine a property's market value based on recent sales of similar properties in the area.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/get-comps/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

You can identify the subject property using either its unique `property_id` or its full `property_address`.

| Parameter          | Type     | Description                                                                                                   | Example                                         |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `property_id`      | `string` | The unique identifier for the property for which you want to find comps.                                      | `M123456789`                                    |
| `property_address` | `string` | The full street address of the property. Required if `property_id` is not provided.                           | `123 Main St, Austin, TX 78704`                 |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/get-comps/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

A successful request returns a `comps` array, with each object representing a comparable property.

```json
{
    "comps": [
        {
            "address": "456 Oak Ave, Austin, TX 78704",
            "distance": "0.45",
            "size": 1900,
            "beds": 3,
            "baths": 2,
            "sold_price": 715000,
            "adjusted_price": 720000,
            "sold_date": "2023-09-15",
            "neighborhood": "Bouldin Creek"
        },
        {
            "address": "789 Pine Ln, Austin, TX 78704",
            "distance": "0.62",
            "size": 2050,
            "beds": 3,
            "baths": 2.5,
            "sold_price": 740000,
            "adjusted_price": 745000,
            "sold_date": "2023-08-22",
            "neighborhood": "Bouldin Creek"
        }
    ]
}
``` 