"""Score property condition from photos and estimate renovation cost.

Costs 2 credits for condition and 5 credits for renovation cost.

    pip install requests
    export HOMESAGE_API_KEY=your_api_key
    python condition_and_rehab.py "4411 E Hidden Oak St Springfield MO 65802"
"""
import os
import sys

import requests

API_BASE_URL = "https://api.homesage.ai"
DEFAULT_ADDRESS = "4411 E Hidden Oak St Springfield MO 65802"


def get_json(path, address, api_key):
    response = requests.get(
        f"{API_BASE_URL}{path}",
        params={"property_address": address},
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=60,
    )
    if response.status_code == 401:
        sys.exit("The API key is missing or invalid.")
    if response.status_code == 402:
        sys.exit("No active plan or not enough credits. See https://homesage.ai/pricing/")
    if response.status_code == 404:
        matches = response.json().get("did_you_mean", [])
        sys.exit("No exact match. Close matches: " + ", ".join(m["address"] for m in matches))
    response.raise_for_status()
    return response.json()


def main():
    api_key = os.environ.get("HOMESAGE_API_KEY")
    if not api_key:
        sys.exit("Set HOMESAGE_API_KEY. Create a key at https://app.homesage.ai/api-portal/keys")

    address = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_ADDRESS

    condition = get_json("/api/properties/property-condition/", address, api_key)
    rehab = get_json("/api/properties/renovation/cost/", address, api_key)

    print("Condition:", condition.get("Property Condition"))
    print("Estimated renovation cost:", rehab.get("renovation_cost"))


if __name__ == "__main__":
    main()
