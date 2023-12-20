import { Dispatch, SetStateAction, useEffect } from 'react';

export const useOutsideClickHandler = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  setter: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setter(false);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
