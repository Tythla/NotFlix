export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  genres: Genre[];
  runtime: number;
  release_date: string;
  homepage?: string;
  overview: string;
  vote_count: number;
  vote_average: number;
  imdb_id: number;
}
