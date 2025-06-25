# Property Condition

This endpoint provides an AI-driven assessment of a property's overall condition based on its photos. This helps users quickly gauge the level of work a property might need.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/property-condition/`

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
curl -X GET "https://your-api-domain.com/api/properties/property-condition/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

```json
{
    "Property Condition": "Outdated"
}
```

### Potential Values

-   `Good`
-   `Outdated`
-   `Poor`
-   `Unlivable`
-   `N/A` (If condition cannot be determined) 