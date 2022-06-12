export type FilmsModel = {
  count: number;
  next: null;
  previous: null;
  result: FilmsModelResults[];
};

export type FilmsModelResults = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};
