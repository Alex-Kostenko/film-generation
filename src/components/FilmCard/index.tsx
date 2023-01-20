import { FC } from "react";

import style from "../../styles/FilmCard.module.css";

interface IFilmCardProps {
  src: string;
  title: string;
  description: string;
}

const FilmCard: FC<IFilmCardProps> = ({ src, title, description }) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={src} alt="" />
      <div className={style.info}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{description}</p>
      </div>
    </div>
  );
};

export default FilmCard;
