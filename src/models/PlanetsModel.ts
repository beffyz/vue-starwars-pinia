export type PlanetsModel = {
  count: number;
  next: string;
  previous: string;
  results: PlanetsModelResults[];
};

export type PlanetsModelResults = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
  edited: string;
};
