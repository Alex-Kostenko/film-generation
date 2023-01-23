import { FC } from "react";

import style from "../../styles/FilmInfo.module.css";

interface IFilmInfoProps {
  name: string;
  year: string;
  country: string;
  genre: string;
  time: string;
  voiceActing: string;
  director: string;
  starring: string;
}

const DESCRIPTION_ITEM = [
  "name",
  "year",
  "country",
  "genre",
  "time",
  "voice acting",
  "director",
  "starring",
];

const FilmInfo: FC<IFilmInfoProps> = ({
  voiceActing,
  director,
  starring,
  country,
  genre,
  name,
  year,
  time,
}) => {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>name:</span>
        <span className={style.descriptionText}>{name}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>year:</span>
        <span className={style.descriptionText}>{year}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>country:</span>
        <span className={style.descriptionText}>{country}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>genre:</span>
        <span className={style.descriptionText}>{genre}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>time:</span>
        <span className={style.descriptionText}>{time}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>voice acting:</span>
        <span className={style.descriptionText}>{voiceActing}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>director:</span>
        <span className={style.descriptionText}>{director}</span>
      </div>
      <div className={style.descriptionItem}>
        <span className={style.descriptionName}>starring:</span>
        <span className={style.descriptionText}>{starring}</span>
      </div>
    </div>
  );
};

export default FilmInfo;
