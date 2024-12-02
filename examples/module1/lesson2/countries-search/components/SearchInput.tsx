import type React from 'react';
import { SEARCH_BY } from '../i18n/messages';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'es-toolkit';
import type { FilterType } from '../types';

export const SearchInput = ({
  searchTerm,
  setSearchTerm,
  filterType,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filterType: FilterType;
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSearchTerm(newValue);
    debouncedSetSearchTerm(newValue);
  };

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>

      <input
        type="text"
        id="Search"
        placeholder={SEARCH_BY.replace('%s', filterType)}
        className="w-full border-2 border-blue-600 rounded-full py-4 ps-5 pe-10 shadow-sm text-lg focus:outline-blue-800"
        value={localSearchTerm}
        onChange={handleChange}
      />
    </div>
  );
};
