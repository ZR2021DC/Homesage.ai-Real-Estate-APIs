# Renovation & Rental Return

This endpoint analyzes the financial returns of buying, renovating, and holding a property as a long-term rental. It calculates everything from gross income and operating income to cash flow and cap rate.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/renovation-return/`

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
| `loan_term`          | `integer` | The loan term in years. Only used if `cash_or_financed` is `financed`. Defaults to `30`.                       | `30`                                            |
| `sqft`               | `integer` | You can provide a custom square footage to override the property's default value for the calculation.         | `2100`                                          |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/renovation-return/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704&cash_or_financed=financed" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

```json
{
    "daily_gross": 116.67,
    "daily_net": 58.33,
    "monthly_gross": 3500.00,
    "monthly_net": 1750.00,
    "annual_gross": 42000.00,
    "annual_net": 21000.00,
    "irr": 8.5,
    "cash_flow": 8400.00,
    "cap_rate": 5.19,
    "noi": 21000.00,
    "cash_on_cash": 4.57
}
``` 