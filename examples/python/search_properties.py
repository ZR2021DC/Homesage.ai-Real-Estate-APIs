import requests
import json

# --- Configuration ---
# IMPORTANT: Replace with your actual API key from your subscription dashboard.
API_KEY = "PASTE_YOUR_API_KEY_HERE"
API_BASE_URL = "https://your-api-domain.com/api/properties"

def search_bulk_properties(filters):
    """
    Searches for properties in bulk using the HomeSage API.

    Args:
        filters (dict): A dictionary of query parameters to filter the search.

    Returns:
        list: A list of property data dictionaries if successful, otherwise None.
    """
    if API_KEY == "PASTE_YOUR_API_KEY_HERE":
        print("Error: Please replace 'PASTE_YOUR_API_KEY_HERE' with your actual API key.")
        return None

    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }

    endpoint = f"{API_BASE_URL}/bulk-property-info/"

    try:
        print("Sending request to API...")
        response = requests.get(endpoint, headers=headers, params=filters, timeout=30)

        # Check for successful response
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error: API request failed with status code {response.status_code}")
            print(f"Response: {response.text}")
            return None

    except requests.exceptions.RequestException as e:
        print(f"An error occurred during the request: {e}")
        return None

if __name__ == "__main__":
    # --- Example Usage ---
    # Define your search criteria. You can customize these filters.
    search_filters = {
        "state": "TX",
        "city": "Austin",
        "price_range_min": 300000,
        "price_range_max": 750000,
        "beds_min": 3,
        "property_type": "detached"
    }

    print(f"Searching for properties with filters: {json.dumps(search_filters, indent=2)}")
    properties = search_bulk_properties(search_filters)

    if properties:
        print(f"\nSuccessfully found {len(properties)} properties.")
        
        # Print details for the first 5 properties found
        for prop in properties[:5]:
            address = prop.get('address', {})
            full_address = f"{address.get('line', 'N/A')}, {address.get('city', 'N/A')}, {address.get('state_code', 'N/A')}"
            list_price = prop.get('list_price', 'N/A')
            print(f"  - Address: {full_address} | Price: ${list_price:,.0f}")
        
        if len(properties) > 5:
            print(f"  ... and {len(properties) - 5} more.")

        # To see all data for the first property:
        # print("\nFull data for the first property found:")
        # print(json.dumps(properties[0], indent=2))
    else:
        print("\nSearch did not return any properties or an error occurred.") 