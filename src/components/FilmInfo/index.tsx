import { FC } from 'react';

import { IFilmInfoProps } from '@/interfaces';

import {
  DescriptionContainer,
  DescriptionName,
  DescriptionItem,
  DescriptionText,
} from './style';

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
  const ITEM = [
    { name: 'name', text: `${name}` },
    { name: 'year', text: `${year}` },
    { name: 'country', text: `${country}` },
    { name: 'genre', text: `${genre}` },
    { name: 'time', text: `${time}` },
    { name: 'voice acting', text: `${voiceActing}` },
    { name: 'director', text: `${director}` },
    { name: 'starring', text: `${starring}` },
  ];
  return (
    <DescriptionContainer>
      {ITEM.map((item, index) => (
        <DescriptionItem key={index}>
          <DescriptionName>{item.name}:</DescriptionName>
          <DescriptionText>{item.text}</DescriptionText>
        </DescriptionItem>
      ))}
    </DescriptionContainer>
  );
};

export default FilmInfo;
