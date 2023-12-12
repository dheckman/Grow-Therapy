import { ActionBarItem } from './common/ActionBarItem';
import filterIcon from '../assets/filter-icon.svg';
import { useContext } from 'react';
import { DashboardContext } from '../containers/Dashboard';
import { NumResultsDropdown } from './NumResultsDropdown';

export const NumResultsFilter = () => {
  const { isNumResultsFilterOpen, itemsPerPage, setIsNumResultsFilterOpen } =
    useContext(DashboardContext);

  return (
    <div>
      <ActionBarItem
        icon={filterIcon}
        isItemToggled={isNumResultsFilterOpen}
        handleToggle={() => setIsNumResultsFilterOpen(!isNumResultsFilterOpen)}
        label="NUM RESULTS"
        value={itemsPerPage}
      />
      {isNumResultsFilterOpen && <NumResultsDropdown />}
    </div>
  );
};
