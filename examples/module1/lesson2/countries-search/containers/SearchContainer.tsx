import { useCallback, useEffect, useMemo, useState } from 'react';

import { useFetchCountries } from '../hooks/useFetchCountries';

import type { FilterType, SortOrder } from '../types';

import { CountriesList } from '../components/CountriesList';
import { SearchInput } from '../components/SearchInput';
import { FilterOptions } from '../components/FilterOptions';
import { SortOptions } from '../components/SortOptions';
import { EarthEmojiGif } from '../components/EarthEmojiGif';
import { Pagination } from '../components/Pagination';
import { Button } from '../components/Button';

export const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 18;

  const { error, loading, refetch, countries } = useFetchCountries(
    searchTerm,
    filterType
  );

  const sortedCountries = useMemo(() => {
    if (!countries) return [];
    const sorted = [...countries];
    if (sortOrder === 'alphabetical') {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOrder === 'population') {
      sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    }
    return sorted;
  }, [countries, sortOrder]);

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [searchTerm, filterType, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-600 tracking-tighter mb-8">
        Countries search <EarthEmojiGif />
      </h1>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
      />
      <div className="flex gap-3 mt-5">
        <FilterOptions filterType={filterType} setFilterType={setFilterType} />
        <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="pt-8"></div>

      {!error ? (
        <div>
          <CountriesList countries={currentCountries} loading={loading} />
          {!loading && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between bg-red-100 border border-red-300 px-5 py-4 font-semibold rounded-2xl text-red-700 text-lg">
          {error}

          <Button color="red" onClick={refetch}>
            Try again
          </Button>
        </div>
      )}
    </>
  );
};
