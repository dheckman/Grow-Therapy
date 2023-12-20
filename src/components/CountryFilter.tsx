import { ActionBarItem } from './common/ActionBarItem';
import countryIcon from '../assets/country-icon.svg';
import { useContext, useRef } from 'react';
import { DashboardContext } from '../containers/Dashboard';
import { CountryDropdown } from './CountryDropdown';
import { useOutsideClickHandler } from '../hooks/useOutsideClickHandler';

export const CountryFilter = () => {
  const { isCountryFilterOpen, setIsCountryFilterOpen, country } = useContext(DashboardContext);

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, setIsCountryFilterOpen);

  return (
    <div ref={wrapperRef}>
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
