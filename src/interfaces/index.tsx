import React from 'react';

export interface IFilmInfoProps {
  voiceActing: string;
  director: string;
  starring: string;
  country: string;
  name: string;
  year: string;
  genre: string;
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
  description: IDescription;
  dataVideo: IVideo;
  filmName: string;
}
export interface IName {
  value: string;
  label: string;
}

export interface ISelectedFilms {
  value: string;
  label: string;
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

export interface IMovieListProps {
  MOVIES: IMovie[];
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

export interface ISelectOptions {
  id?: number;
  name?: string;
  label?: string;
  value?: number;
}

export interface IStars {
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
