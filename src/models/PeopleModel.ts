export type PeopleModel = {
  count: number;
  next: string;
  previous: null;
  results: PeopleModelResults[];
};

export type PeopleModelResults = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};
