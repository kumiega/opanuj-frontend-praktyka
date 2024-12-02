export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  capital?: string[];
  population: number;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  maps?: {
    googleMaps: string;
  };
}

export type FilterType = 'name' | 'currency' | 'language' | 'capital';
export type SortOrder = 'alphabetical' | 'population';
