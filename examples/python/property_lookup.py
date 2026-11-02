"""Look up one US property with the Homesage.ai Real Estate APIs.

Costs 2 credits per successful call.

    pip install requests
    export HOMESAGE_API_KEY=your_api_key
    python property_lookup.py "4411 E Hidden Oak St Springfield MO 65802"
"""
import os
import sys

import requests

API_BASE_URL = "https://developers.homesage.ai"
DEFAULT_ADDRESS = "4411 E Hidden Oak St Springfield MO 65802"


def main():
    api_key = os.environ.get("HOMESAGE_API_KEY")
    if not api_key:
        sys.exit("Set HOMESAGE_API_KEY. Create a key at https://app.homesage.ai/api-portal/keys")

    address = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_ADDRESS
    response = requests.get(
        f"{API_BASE_URL}/api/properties/info/",
        params={"property_address": address},
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=60,
    )

    if response.status_code == 401:
        sys.exit("The API key is missing or invalid.")
    if response.status_code == 402:
        sys.exit("No active plan or not enough credits. See https://homesage.ai/pricing")
    if response.status_code == 404:
        # A 404 costs 0 credits. Retry with one of the close matches.
        matches = response.json().get("did_you_mean", [])
        sys.exit("No exact match. Close matches: " + ", ".join(m["address"] for m in matches))
    response.raise_for_status()

    print(response.json()["estimated_value"])


if __name__ == "__main__":
    main()
