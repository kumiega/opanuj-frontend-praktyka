import type { Country } from '../types';

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-500">
      <div className="flex items-center mb-5">
        <img
          className="overflow-hidden rounded-md h-8 shadow-md border me-3"
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
        <h5
          data-testid="country-name"
          className="mb-1 text-lg font-semibold tracking-tight text-gray-900"
        >
          {country.name.common}
        </h5>
      </div>

      <p data-testid="country-population" className="mb-3">
        <span className="font-medium">Total population:</span>{' '}
        {country.population.toLocaleString()}
      </p>

      {country.currencies && (
        <div className="mb-3 font-normal">
          <span className="block font-medium mb-1">Country currencies: </span>
          <p className="text-gray-800 text-sm tracking-wide">
            {Object.values(country.currencies ?? {})
              .map((currency) => `${currency.name} (${currency.symbol})`)
              .join(', ')}
          </p>
        </div>
      )}

      {country.languages && (
        <div className="mb-3 font-normal">
          <span className="block font-medium mb-1">Offical languages: </span>
          <p className="text-gray-800 text-sm tracking-wide">
            {Object.values(country.languages ?? {})
              .filter((language) => language !== 'undefined')
              .join(', ')}
          </p>
        </div>
      )}
      <a
        href={country.maps?.googleMaps}
        target="_blank"
        className="inline-flex font-medium items-center text-blue-600 hover:underline mt-auto"
      >
        See on the map
        <svg
          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
};
