# Investment Potential Score

This endpoint provides a high-level investment rating for a property. The score helps users quickly identify promising opportunities without needing to perform a full manual analysis.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/investment-potential/`

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
curl -X GET "https://your-api-domain.com/api/properties/investment-potential/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

The response is a simple JSON object containing the potential rating.

```json
{
    "investment_potential": "High"
}
```

### Potential Values

-   `Excellent`
-   `High`
-   `Good`
-   `No Potential Detected` 