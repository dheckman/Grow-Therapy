import { ActionBarItem } from './common/ActionBarItem';
import filterIcon from '../assets/filter-icon.svg';
import { useContext, useRef } from 'react';
import { DashboardContext } from '../containers/Dashboard';
import { NumResultsDropdown } from './NumResultsDropdown';
import { useOutsideClickHandler } from '../hooks/useOutsideClickHandler';

export const NumResultsFilter = () => {
  const { isNumResultsFilterOpen, itemsPerPage, setIsNumResultsFilterOpen } =
    useContext(DashboardContext);

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, setIsNumResultsFilterOpen);

  return (
    <div ref={wrapperRef}>
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
