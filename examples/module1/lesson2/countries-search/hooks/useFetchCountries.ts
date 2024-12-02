import { useState, useEffect, useCallback } from 'react';
import {
  fetchCountriesByName,
  fetchCountriesByCurrency,
  fetchCountriesByLanguage,
  fetchCountriesByCapital,
  fetchAllCountries,
} from '../api/apiClient';
import type { Country, FilterType } from '../types';

export const useFetchCountries = (
  searchTerm: string,
  filterType: FilterType
) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStrategies = {
    name: fetchCountriesByName,
    currency: fetchCountriesByCurrency,
    language: fetchCountriesByLanguage,
    capital: fetchCountriesByCapital,
    default: fetchAllCountries,
  };

  const fetchData = useCallback(async () => {
    const fetchFn =
      searchTerm === ''
        ? fetchAllCountries
        : fetchStrategies[filterType] ?? fetchStrategies.default;

    setError(null);
    setLoading(true);

    try {
      const data = await fetchFn(searchTerm);
      setCountries(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred'
      );
      setCountries(null);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filterType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    error,
    loading,
    countries,
    refetch: fetchData,
  };
};
