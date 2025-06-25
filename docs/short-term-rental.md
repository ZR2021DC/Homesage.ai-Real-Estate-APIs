# Short-Term Rental Analysis

This endpoint provides a detailed financial projection for using a property as a short-term rental (like Airbnb). It returns estimated monthly revenue, occupancy rates, and a breakdown of income for the upcoming year.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/short-term-rental/`

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
curl -X GET "https://your-api-domain.com/api/properties/short-term-rental/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

The response includes monthly estimates and overall annual projections.

```json
{
    "monthly_revenue": 4500.00,
    "occupancy_rate": 75.0,
    "monthly_estimates": [
        {
            "month": "January",
            "revenue": 3800.00
        },
        {
            "month": "February",
            "revenue": 4100.00
        },
        {
            "month": "March",
            "revenue": 5200.00
        }
    ],
    "annual_revenue": 54000.00,
    "average_daily_rate": 200.00
}
``` 