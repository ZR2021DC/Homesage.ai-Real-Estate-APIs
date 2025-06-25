// This example uses the 'node-fetch' package.
// Make sure to install it using: npm install node-fetch

const fetch = require('node-fetch');

// --- Configuration ---
// IMPORTANT: Replace with your actual API key from your subscription dashboard.
const API_KEY = "PASTE_YOUR_API_KEY_HERE";
const API_BASE_URL = "https://your-api-domain.com/api/properties";

async function searchBulkProperties(filters) {
    /**
     * Searches for properties in bulk using the HomeSage API.
     * @param {object} filters - An object of query parameters to filter the search.
     * @returns {Promise<object[]|null>} - A promise that resolves to an array of property data objects if successful, otherwise null.
     */
    if (API_KEY === "PASTE_YOUR_API_KEY_HERE") {
        console.error("Error: Please replace 'PASTE_YOUR_API_KEY_HERE' with your actual API key.");
        return null;
    }

    const headers = {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    };

    // Build the query string from the filters object
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = `${API_BASE_URL}/bulk-property-info/?${queryParams}`;

    try {
        console.log("Sending request to API...");
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: headers,
            timeout: 30000 // 30 seconds timeout
        });

        // Check for successful response
        if (response.ok) { // response.ok checks for status codes in the 200-299 range
            return await response.json();
        } else {
            console.error(`Error: API request failed with status code ${response.status}`);
            const errorData = await response.text();
            console.error(`Response: ${errorData}`);
            return null;
        }

    } catch (error) {
        console.error(`An error occurred during the request: ${error}`);
        return null;
    }
}

// --- Main execution block ---
(async () => {
    // --- Example Usage ---
    // Define your search criteria. You can customize these filters.
    const searchFilters = {
        "state": "CA",
        "city": "Los Angeles",
        "price_range_max": 1000000,
        "beds_min": 3,
        "investment_potential": "excellent,high"
    };

    console.log("Searching for properties with filters:", JSON.stringify(searchFilters, null, 2));
    
    const properties = await searchBulkProperties(searchFilters);

    if (properties) {
        console.log(`\nSuccessfully found ${properties.length} properties.`);
        
        // Print details for the first 5 properties found
        for (const prop of properties.slice(0, 5)) {
            const address = prop.address || {};
            const fullAddress = `${address.line || 'N/A'}, ${address.city || 'N/A'}, ${address.state_code || 'N/A'}`;
            const listPrice = prop.list_price ? `$${prop.list_price.toLocaleString()}` : 'N/A';
            console.log(`  - Address: ${fullAddress} | Price: ${listPrice}`);
        }
        
        if (properties.length > 5) {
            console.log(`  ... and ${properties.length - 5} more.`);
        }

        // To see all data for the first property:
        // console.log("\nFull data for the first property found:");
        // console.log(JSON.stringify(properties[0], null, 2));
    } else {
        console.log("\nSearch did not return any properties or an error occurred.");
    }
})(); 