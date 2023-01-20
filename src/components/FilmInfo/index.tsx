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
      <div className={style.descriptionNameContainer}>
        {DESCRIPTION_ITEM.map((item) => (
          <span className={style.descriptionName}>{item}:</span>
        ))}
      </div>
      <div className={style.descriptionTextContainer}>
        <span className={style.descriptionText}>{name}</span>
        <span className={style.descriptionText}>{year}</span>
        <span className={style.descriptionText}>{country}</span>
        <span className={style.descriptionText}>{genre}</span>
        <span className={style.descriptionText}>{time}</span>
        <span className={style.descriptionText}>{voiceActing}</span>
        <span className={style.descriptionText}>{director}</span>
        <span className={style.descriptionText}>{starring}</span>
      </div>
    </div>
  );
};

export default FilmInfo;
