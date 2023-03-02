import React from 'react';
interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface MovieEntity {
  id: number;
  default?: 34234;
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genre_ids: number[];
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: Production_companies[];
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFilmInfoProps {
  voteAverage: number;
  budget: number;
  studio: string;
  country: string;
  name: string;
  year: string;
  genre: string[];
  time: string;
}

export interface PortalProps {
  children: React.ReactNode;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IDescription {
  voiceActing: string;
  director: string;
  starring: string;
  country: string;
  genre: string;
  name: string;
  year: string;
  time: string;
}

export interface IVideo {
  poster: string;
  src: string;
}

export interface IAboutFilmProps {
  movie: MovieEntity;
  id: string;
}
export interface IName {
  value: string;
  label: string;
}

export interface ISelectedFilms {
  value?: number;
  label?: string;
  id: number;
  name?: string;
}

export interface IMovie {
  id: number;
  engTitle: string;
  rusTitle: string;
  description: string;
  img: string;
  lables: Array<string>;
  date: string;
}

export interface IBackBtn {
  onClick: () => void;
}

export interface IMovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ISliderTextProps {
  movieData: IMovieData;
}

export interface IStars {
  rating: any;
  movieRating: number;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
}

// export interface ISearchPanel {
//   movieRating: number;
//   setMovieRating: React.Dispatch<React.SetStateAction<number>>;
// }
