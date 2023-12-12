import { useContext } from 'react';
import { NumResultsOptionsInterface, options } from '../utils/numResultsOptions';
import { DashboardContext } from '../containers/Dashboard';

export const NumResultsDropdown = () => {
  const { setItemsPerPage, setIsNumResultsFilterOpen } = useContext(DashboardContext);

  const handleUpdateItemsPerPage = (option: NumResultsOptionsInterface) => {
    setItemsPerPage(option.value);
    setIsNumResultsFilterOpen(false);
  };

  return (
    <div className="shadow-dropdown font-poppins absolute top-full flex w-[200px] justify-center rounded-3xl border-none bg-white px-4 pt-8 text-center">
      <label className="w-full">
        {options.map((option) => {
          return (
            <option
              className="hover:bg-ivy-300 mb-2 cursor-pointer p-2 hover:rounded-full"
              onClick={() => handleUpdateItemsPerPage(option)}
              key={option.value}
              value={option.value}>
              {option.label}
            </option>
          );
        })}
      </label>
    </div>
  );
};
