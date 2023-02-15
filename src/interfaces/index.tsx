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

export interface IDescroptionSlider {
  img: any;
  description: string;
}

export interface IName {
  value: string;
  label: string;
}

export interface ICriteria {
  option: any;
  action: string;
  name: string;
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
