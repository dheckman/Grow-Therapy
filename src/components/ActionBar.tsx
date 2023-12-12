import { CountryFilter } from './CountryFilter';
import { DatePicker } from './DatePicker';
import { NumResultsFilter } from './NumResultsFilter';

export const ActionBar = () => (
  <section className="shadow-standard relative flex h-full w-full flex-col items-center justify-between rounded-none bg-white p-4 sm:h-full md:h-24 md:flex-row md:rounded-[100px]">
    <DatePicker />
    <div className="mx-4 h-full border-r border-neutral-300" />
    <NumResultsFilter />
    <div className="mx-4 h-full border-r border-neutral-300" />
    <CountryFilter />
    <button className="font-poppins w-full rounded-[100px] bg-green-500 px-6 py-3 text-white sm:w-40">
      Search
    </button>
  </section>
);
