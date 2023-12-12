import { ActionBarItem } from './common/ActionBarItem';
import countryIcon from '../assets/country-icon.svg';
import { useContext } from 'react';
import { DashboardContext } from '../containers/Dashboard';
import { CountryDropdown } from './CountryDropdown';

export const CountryFilter = () => {
  const { isCountryFilterOpen, setIsCountryFilterOpen, country } = useContext(DashboardContext);

  return (
    <div>
      <ActionBarItem
        icon={countryIcon}
        isItemToggled={isCountryFilterOpen}
        handleToggle={() => setIsCountryFilterOpen(!isCountryFilterOpen)}
        label="COUNTRY"
        value={country.label}
      />
      {isCountryFilterOpen && <CountryDropdown />}
    </div>
  );
};
