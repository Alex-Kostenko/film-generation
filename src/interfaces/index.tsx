import { DefaultTFuncReturn } from 'i18next';
import React from 'react';
interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface MovieEntity {
  id: number;
  default: 34234;
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
  production_companies: Production_companies[];
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFilmInfoProps {
  voteAverage: number | string;
  budget: number | string;
  studio: string;
  country: string;
  name: string;
  year: string;
  genre: number[];
  time: number | string;
}
export interface IError {
  name: string;
  message: string;
  statusCode: number;
  stack?: string;
}
export interface PortalProps {
  children: React.ReactNode;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface LinkQueries<T> {
  label: string;
  value: string | Array<T>;
  key?: string;
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
  apiKey: string;
  t: (key: string) => string;
}

export interface IName {
  value: string;
  label: string;
}

export interface ISelectedFilms {
  [index: string]: string | undefined;
}
export interface IYearRange {
  startYear: number;
  endYear: number;
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

export interface LangGenre {
  id: number;
  name: string;
  name_eng: string;
  name_ukr: string;
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

interface StyleI {
  margin: string;
  color: string;
}
export interface IStars {
  rating: number | null | DefaultTFuncReturn;
  movieRating: number;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  style: StyleI;
}

interface Params {
  id: string;
}

export interface AboutFilmServerSideProps {
  locale: string;
  params: Params;
}

export interface ILocale {
  locale: string;
}

export interface IRequestBody {
  genres_ids: number[];
  dir: string;
  orderBy: string;
  includeAdult?: boolean;
  searchInDescription?: boolean;
  voteAvarageFrom: number;
  voteCountFrom?: number;
  releaseDateFrom?: number;
  releaseDateTo?: number;
}

export interface IFilter {
  checkedAdult: boolean;
  checkedSearchInDesc: boolean;
}
