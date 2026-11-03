"""Preview an area search, then run it with the Homesage.ai Real Estate APIs.

The preview costs 0 credits. The search costs 1 credit per property returned,
so it runs only when you pass --run.

    pip install requests
    export HOMESAGE_API_KEY=your_api_key
    python search_properties.py
    python search_properties.py --run
"""
import json
import os
import sys

import requests

API_BASE_URL = "https://api.homesage.ai"
FILTERS = {
    "location": json.dumps([{"type": "city", "city": "Austin", "state_code": "TX"}]),
    "property_status": "active",
    "price_max": 500000,
    "property_condition": "outdated|poor",
}


def check(response):
    if response.status_code == 401:
        sys.exit("The API key is missing or invalid.")
    if response.status_code == 402:
        sys.exit("No active plan or not enough credits. See https://homesage.ai/pricing/")
    response.raise_for_status()
    return response.json()


def main():
    api_key = os.environ.get("HOMESAGE_API_KEY")
    if not api_key:
        sys.exit("Set HOMESAGE_API_KEY. Create a key at https://app.homesage.ai/api-portal/keys")
    headers = {"Authorization": f"Bearer {api_key}"}

    preview = check(requests.get(
        f"{API_BASE_URL}/api/workspace/search/count/",
        params=FILTERS,
        headers=headers,
        timeout=60,
    ))
    print(f"{preview['count']} properties match. The search costs {preview['cost']} credits.")

    if "--run" not in sys.argv:
        print("Pass --run to run the search.")
        return

    results = check(requests.post(
        f"{API_BASE_URL}/api/workspace/search/",
        json=FILTERS,
        headers=headers,
        timeout=300,
    ))
    print(f"Charged {results['charged']} credits. {results['credits_left']} credits left.")
    for prop in results["data"][:5]:
        print(prop["address"])


if __name__ == "__main__":
    main()
