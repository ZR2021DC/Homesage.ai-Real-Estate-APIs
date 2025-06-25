# Property Info

This endpoint retrieves a comprehensive set of information for a single property. It includes everything from basic details and property features to home value estimates, tax history, and school ratings.

-   **Method:** `GET`
-   **Endpoint:** `/api/properties/property-info/`

---

## Authentication

All requests to this endpoint must be authenticated. Include your API key in the `Authorization` header.

-   **Header:** `Authorization: Bearer YOUR_API_KEY`

---

## Query Parameters

You can identify the property using either its unique `property_id` or its full `property_address`.

| Parameter          | Type     | Description                                                                                                   | Example                                         |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `property_id`      | `string` | The unique identifier for the property.                                                                       | `M123456789`                                    |
| `property_address` | `string` | The full street address of the property. Required if `property_id` is not provided.                           | `123 Main St, Austin, TX 78704`                 |

---

## Example Request

```bash
curl -X GET "https://your-api-domain.com/api/properties/property-info/?property_address=123%20Main%20St%2C%20Austin%2C%20TX%2078704" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Example Success Response

A successful request returns a detailed JSON object for the property.

```json
{
    "address": {
        "line": "123 Main St",
        "city": "Austin",
        "state_code": "TX",
        "postal_code": "78704"
    },
    "list_date": "2023-10-01T15:00:00Z",
    "status": "for_sale",
    "listing_price": 725000,
    "estimated_value": 735000,
    "sf": 1950,
    "psf": 371.79,
    "dom": 35,
    "property_features": {
        "beds": 3,
        "baths": 2.5,
        "stories": 2,
        "garage": 2
    },
    "building_info": {
        "year_built": 1998,
        "style": "Traditional"
    },
    "property_history": [
        {
            "date": "2015-05-20",
            "event": "Sold",
            "price": 450000
        }
    ],
    "school_ratings": [
        {
            "name": "Austin High School",
            "rating": "8/10",
            "distance_miles": 1.2
        }
    ],
    "photos": [
        {
            "href": "https://image-url.com/photo1.jpg"
        },
        {
            "href": "https://image-url.com/photo2.jpg"
        }
    ]
}
``` 