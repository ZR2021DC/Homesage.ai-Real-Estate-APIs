# Renovation Cost Analysis

This endpoint provides a detailed estimate of renovation costs and the potential increase in property value after repairs. It's a crucial tool for accurately budgeting a flip or "buy and hold" renovation project.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/renovation-cost/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

| Parameter          | Type      | Description                                                                                                   | Example                                         |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `property_id`      | `string`  | The unique identifier for the property.                                                                       | `M123456789`                                    |
| `property_address` | `string`  | The full street address of the property. Required if `property_id` is not provided.                           | `123 Main St, Austin, TX 78704`                 |
| `sqft`             | `integer` | You can provide a custom square footage to override the property's default value for the calculation.         | `2100`                                          |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/renovation-cost/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

```json
{
    "renovation_cost": 75000.00,
    "full_potential": 925000.00,
    "spread": 200000.00,
    "value_gap": 27.59,
    "estimated_value_increase": 190000.00
}
```

### Response Fields

-   **`renovation_cost`**: The total estimated cost to renovate the property.
-   **`full_potential`**: The estimated After Repair Value (ARV) of the property.
-   **`spread`**: The difference between the ARV and the current list/estimated price.
-   **`value_gap`**: The spread represented as a percentage of the list price.
-   **`estimated_value_increase`**: The projected increase in value from the renovations. 