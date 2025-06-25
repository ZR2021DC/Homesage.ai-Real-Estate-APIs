# Is TLC (Tender Loving Care)

This endpoint provides a simple boolean (`true`/`false`) response indicating whether a property is likely a "TLC" (Tender Loving Care) opportunity, meaning it may require significant repairs or renovations.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/is-tlc/`

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
curl -X GET "https://your-api-domain.com/api/properties/is-tlc/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

```json
{
    "is_tlc": true
}
``` 