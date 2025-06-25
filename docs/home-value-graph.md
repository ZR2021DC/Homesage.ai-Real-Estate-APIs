# Home Value Graph Data

This endpoint retrieves historical home value data for a property, which can be used to plot a valuation graph over time. This is useful for analyzing market trends and appreciation.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/home-value-graph/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

| Parameter          | Type     | Description                                                                                                   | Example                                         |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `property_id`      | `string` | The unique identifier for the property.                                                                       | `M123456789`                                    |
| `property_address` | `string` | The full street address of the property. Required if `property_id` is not provided.                           | `123 Main St, Austin, TX 78704`                 |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/home-value-graph/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

The response is a JSON object containing an array of data points, sorted by date in descending order.

```json
{
    "home_value_graph": [
        {
            "date": "2023-10",
            "value": 735000
        },
        {
            "date": "2023-09",
            "value": 730000
        },
        {
            "date": "2023-08",
            "value": 728000
        }
    ]
}
``` 