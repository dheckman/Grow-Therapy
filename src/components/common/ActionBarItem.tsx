import chevron from '../../assets/chevron.svg';

export const ActionBarItem = ({
  icon,
  isItemToggled,
  handleToggle,
  label,
  value
}: {
  icon: string;
  isItemToggled: boolean;
  handleToggle: () => void;
  label: string;
  value: string | number | undefined;
}) => {
  return (
    <div className="flex w-[220px] rounded-[100px] p-3 hover:bg-hover">
      <img className="mr-6" src={icon} alt={`icon of ${label}`} />
      <div
        className="flex cursor-pointer flex-col items-baseline self-baseline"
        onClick={handleToggle}>
        <div className="flex">
          <div className="mr-[6px] font-poppins text-xs text-neutral-500">{label}</div>
          <img
            alt="chevron icon"
            className={`${isItemToggled && 'rotate-180'} transition-all duration-300`}
            src={chevron}
          />
        </div>
        <div className="mt-[2px] font-poppins">{value}</div>
      </div>
    </div>
  );
};
