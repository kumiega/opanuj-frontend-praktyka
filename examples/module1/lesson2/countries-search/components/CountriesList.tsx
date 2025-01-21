import type { Country } from '../types';
import { CountryCard } from './CountryCard';
import { SkeletonCountryCard } from './SkeletonCountryCard';

export const CountriesList = ({
  countries,
  loading,
}: {
  countries: Country[] | null;
  loading: boolean;
}) => {
  if (loading) {
    return (
      <div>
        <p className="font-semibold mb-3">Loading...</p>
        <div className="grid grid-cols-3 gap-3">
          {Array(6)
            .fill(null)
            .map((_, id) => (
              <SkeletonCountryCard key={id} />
            ))}
        </div>
      </div>
    );
  }

  if (!countries) return null;

  if (countries && countries.length === 0) {
    return <div>No countries found.</div>;
  }

  return (
    <div>
      <p className="font-semibold mb-3">Countries found:</p>
      <div className="grid grid-cols-3 gap-3">
        {countries.map((country) => (
          <CountryCard key={country.name.official} country={country} />
        ))}
      </div>
    </div>
  );
};
