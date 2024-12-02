import type React from 'react';
import { FILTER_BY } from '../i18n/messages';
import type { FilterType } from '../types';

export const FilterOptions = ({
  filterType,
  setFilterType,
}: {
  filterType: FilterType;
  setFilterType: React.Dispatch<React.SetStateAction<FilterType>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as FilterType);
  };

  return (
    <label htmlFor="filterOptions" className="font-medium">
      {FILTER_BY}
      <select
        id="filterOptions"
        className="border border-blue-500 ms-2 px-3 py-1.5 rounded-xl"
        value={filterType}
        onChange={handleChange}
      >
        <option value="name">Name</option>
        <option value="currency">Currency</option>
        <option value="language">Language</option>
        <option value="capital">Capital</option>
      </select>
    </label>
  );
};
