import { FC } from "react";

import { Card, Img, Info, Text, Title } from "./style";

interface IFilmCardProps {
  src: string;
  title: string;
  description: string;
}

const FilmCard: FC<IFilmCardProps> = ({ src, title, description }) => {
  return (
    <Card>
      <Img src={src} alt="" />
      <Info>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Info>
    </Card>
  );
};

export default FilmCard;
