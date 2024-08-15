export const fetchCountryNames = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const countries = await response.json();
    const formattedCountries = countries.map((country) => {
      const suffixes = country.idd.suffixes || [];
      const suffix = suffixes.length <= 1 ? suffixes[0] : "";

      return {
        name: country.name.common, // Country name
        code: country.cca3, // ISO Alpha-3 country code
        callingCode: country.idd.root + suffix,
      };
    });
    formattedCountries.sort((a, b) => a.name.localeCompare(b.name));
    return formattedCountries;
    } catch (error) {
    console.error("Error fetching country names:", error);
    throw error;
  }
};
