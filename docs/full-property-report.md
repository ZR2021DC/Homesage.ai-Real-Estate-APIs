# Full Property Report

This is a comprehensive endpoint that aggregates a vast amount of data and analysis for a single property into one convenient call. It combines property details, financial analysis (flip and rental), renovation costs, and investment scores.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/full-report/`

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
| `cash_or_financed`   | `string`  | The financing method for calculations. Can be `cash` or `financed`. Defaults to `cash`.                         | `financed`                                      |
| `downpayment`        | `float`   | The downpayment percentage. Only used if `cash_or_financed` is `financed`. Defaults to `20`.                   | `25`                                            |
| `interest_rate`      | `float`   | The annual interest rate for the loan. Only used if `cash_or_financed` is `financed`. Defaults to `4.5`.      | `5.25`                                          |
| `loan_term`          | `integer` | The loan term in years. Only used if `cash_or_financed` is `financed`. Defaults to `30`.                       | `30`                                            |
| `sqft`               | `integer` | You can provide a custom square footage to override the property's default value for the calculation.         | `2100`                                          |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/full-report/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704&cash_or_financed=financed" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

The response is a large JSON object containing multiple nested objects for each category of data.

```json
{
    "property_info": {
        "address": { "line": "123 Main St", "city": "Austin", "state_code": "TX", "postal_code": "78704" },
        "listing_price": 725000,
        "estimated_value": 735000,
        "property_features": { "beds": 3, "baths": 2.5 }
    },
    "flip_return": {
        "total_project_cost": 810500.00,
        "profit": 114500.00,
        "resale_roi": 14.13
    },
    "rental_return": {
        "monthly_gross": 3500.00,
        "annual_net": 21000.00,
        "cap_rate": 5.19,
        "cash_on_cash": 4.57
    },
    "renovation_cost": {
        "renovation_cost": 75000.00,
        "full_potential": 925000.00
    },
    "investment_scores": {
        "pfs": 8.25,
        "investment_potential": "High",
        "property_condition": "Outdated"
    },
    "comparable_properties": [
        { "address": "456 Oak Ave, Austin, TX 78704", "sold_price": 715000 }
    ]
} 