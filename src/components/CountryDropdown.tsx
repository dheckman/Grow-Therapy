import { useContext } from 'react';
import { DashboardContext } from '../containers/Dashboard';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

export interface CountryOptionsInterface {
  label: string;
  value: string;
}

export const CountryDropdown = () => {
  const { setIsCountryFilterOpen, setCountry, country } = useContext(DashboardContext);
  countries.registerLocale(enLocale);

  const handleUpdateCountry = (selectedCountry: CountryOptionsInterface) => {
    setIsCountryFilterOpen(false);
    setCountry({
      ...country,
      label: selectedCountry.label,
      value: selectedCountry.value
    });
  };

  const countryObj = countries.getNames('en', { select: 'official' });
  const countryOptions = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });

  return (
    <div className="absolute top-full flex w-auto justify-center rounded-3xl border-none bg-white px-4 pt-5 font-poppins shadow-dropdown">
      <label className="flex w-full flex-col items-start">
        <ul className="max-h-60 overflow-auto">
          {countryOptions.map((country, idx: number) => {
            return (
              <li
                className="mb-2 cursor-pointer p-2 hover:rounded-full hover:bg-ivy-300"
                onClick={() => handleUpdateCountry(country)}
                key={idx}
                value={country.value}>
                {country.label}
              </li>
            );
          })}
        </ul>
      </label>
    </div>
  );
};
