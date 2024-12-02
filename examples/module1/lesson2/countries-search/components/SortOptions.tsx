import type React from 'react';
import { SORT_BY } from '../i18n/messages';
import type { SortOrder } from '../types';

export const SortOptions = ({
  sortOrder,
  setSortOrder,
}: {
  sortOrder: SortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
  };

  return (
    <label htmlFor="sortOptions" className="font-medium">
      {SORT_BY}
      <select
        id="sortOptions"
        className="border border-blue-500 ms-2 px-3 py-1.5 rounded-xl"
        value={sortOrder}
        onChange={handleChange}
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="population">Population</option>
      </select>
    </label>
  );
};
