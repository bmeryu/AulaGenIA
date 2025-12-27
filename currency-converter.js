/**
 * Automatic USD to CLP Currency Converter
 * Updates exchange rate every 24 hours automatically
 * Uses localStorage for caching to minimize API calls
 */

async function updateCLPPrice() {
    const USD_PRICE = 20;
    const CACHE_KEY = 'aula_genia_clp_rate';
    const CACHE_TIME_KEY = 'aula_genia_clp_time';
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    try {
        // Check if we have valid cached data
        const cachedRate = localStorage.getItem(CACHE_KEY);
        const cacheTime = localStorage.getItem(CACHE_TIME_KEY);

        let clpRate;

        // Use cache if it exists and is less than 24 hours old
        if (cachedRate && cacheTime && (Date.now() - parseInt(cacheTime) < CACHE_DURATION)) {
            clpRate = parseFloat(cachedRate);
            console.log('Using cached CLP exchange rate:', clpRate);
        } else {
            // Fetch new exchange rate from API
            console.log('Fetching new CLP exchange rate...');
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            clpRate = data.rates.CLP;

            // Save to cache
            localStorage.setItem(CACHE_KEY, clpRate.toString());
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
            console.log('Fetched and cached new CLP exchange rate:', clpRate);
        }

        // Calculate CLP price
        const clpPrice = Math.round(USD_PRICE * clpRate);

        // Format with thousands separator (Chilean format)
        const formattedCLP = clpPrice.toLocaleString('es-CL');

        // Update all elements with class 'clp-price'
        document.querySelectorAll('.clp-price').forEach(el => {
            el.textContent = `≈ $${formattedCLP} CLP`;
        });

        // Update elements with class 'clp-price-only' (just the number)
        document.querySelectorAll('.clp-price-only').forEach(el => {
            el.textContent = `$${formattedCLP}`;
        });

    } catch (error) {
        console.error('Error fetching exchange rate:', error);

        // Fallback to approximate value if API fails
        document.querySelectorAll('.clp-price').forEach(el => {
            el.textContent = '≈ $20.000 CLP';
        });

        document.querySelectorAll('.clp-price-only').forEach(el => {
            el.textContent = '$20.000';
        });
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCLPPrice);
} else {
    // DOM already loaded
    updateCLPPrice();
}
