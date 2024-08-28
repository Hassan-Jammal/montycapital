import { ref } from 'vue';
import countriesData from '~/data/countries.json';

export function useCountryDetection() {
    const selectedCountry = ref({});
    const errors = ref({
        country: ''
    });

    const detectCountry = async () => {
        try {
            const response = await fetch('/api/geoip');
            const data = await response.json();
            console.log('API Response:', data); // Debug log

            if (data && data.country) {
                const detectedCountry = countriesData.find(country => country.iso2 === data.country);

                if (detectedCountry) {
                    selectedCountry.value = detectedCountry;
                } else {
                    console.warn('Detected country not found in countries data'); // Debug log
                }
            } else {
                errors.value.country = 'No country data found';
            }
        } catch (error) {
            console.error('Error detecting country:', error);
            errors.value.country = 'Unable to detect country';
        }
    };

    return {
        selectedCountry,
        errors,
        detectCountry
    };
}
