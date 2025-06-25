# Flip Return Analysis

This endpoint calculates the potential return on a "fix and flip" investment. It provides key metrics like total project cost, estimated profit, and the return on investment (ROI).

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/flip-return/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

| Parameter            | Type      | Description                                                                                                   | Example                                         |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `property_id`        | `string`  | The unique identifier for the property.                                                                       | `M123456789`                                    |
| `property_address`   | `string`  | The full street address of the property. Required if `property_id` is not provided.                           | `123 Main St, Austin, TX 78704`                 |
| `cash_or_financed`   | `string`  | The financing method. Can be `cash` or `financed`. Defaults to `cash`.                                        | `financed`                                      |
| `downpayment`        | `float`   | The downpayment percentage (e.g., 20 for 20%). Only used if `cash_or_financed` is `financed`. Defaults to `20`. | `25`                                            |
| `interest_rate`      | `float`   | The annual interest rate for the loan. Only used if `cash_or_financed` is `financed`. Defaults to `4.5`.      | `5.25`                                          |
| `loan_term`          | `integer` | The loan term in years. Only used if `cash_or_financed` is `financed`. Defaults to `30`.                       | `15`                                            |
| `sqft`               | `integer` | You can provide a custom square footage to override the property's default value for the calculation.         | `2100`                                          |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/flip-return/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704&cash_or_financed=financed&downpayment=25" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

```json
{
    "total_project_cost": 810500.00,
    "profit": 114500.00,
    "resale_roi": 14.13,
    "max_recommended_renovation_budget": 95000.00
}
``` 