# Address Autocomplete

This is a utility endpoint designed to power a search bar with real-time address suggestions. As a user types, this API provides a list of matching addresses, helping to ensure accuracy and improve user experience.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/auto-complete/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

| Parameter | Type     | Description                                     | Example           |
| --------- | -------- | ----------------------------------------------- | ----------------- |
| `input`   | `string` | **Required**. The partial address string to search for. | `123 Main St`     |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/auto-complete/?input=123%20Main%20St" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

The response is a JSON object containing a `data` array of suggested addresses.

```json
{
    "outcome": "success",
    "data": [
        {
            "text": "123 Main St, Austin, TX, USA",
            "address": "123 Main St, Austin, TX, USA",
            "city": "Austin",
            "postal_code": "78704",
            "state_code": "TX"
        },
        {
            "text": "123 Main St, Boston, MA, USA",
            "address": "123 Main St, Boston, MA, USA",
            "city": "Boston",
            "postal_code": "02108",
            "state_code": "MA"
        }
    ]
}
```

*Note: For internal platform usage, this endpoint also returns a property `id`. This field is omitted for external API key usage.* 