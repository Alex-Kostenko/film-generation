import { FC } from 'react';

import { IFilmCardProps } from '@/interfaces';

import { Title, Card, Img, Info, Text } from './style';

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
