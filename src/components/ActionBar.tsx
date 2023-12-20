import { useContext } from 'react';
import { CountryFilter } from './CountryFilter';
import { DatePicker } from './DatePicker';
import { NumResultsFilter } from './NumResultsFilter';
import { DashboardContext } from '../containers/Dashboard';

export const ActionBar = () => {
  const { handleSearch } = useContext(DashboardContext);

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-between rounded-none bg-white p-4 shadow-standard sm:h-full md:h-24 md:flex-row md:rounded-[100px]">
      <DatePicker />
      <div className="mx-4 h-full border-r border-neutral-300" />
      <NumResultsFilter />
      <div className="mx-4 h-full border-r border-neutral-300" />
      <CountryFilter />
      <button
        onClick={handleSearch}
        className="w-full rounded-[100px] bg-green-500 px-6 py-3 font-poppins text-white sm:w-40">
        Search
      </button>
    </section>
  );
};
