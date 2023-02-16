import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation();
  const ITEM = [
    { name: t('filmPage.name'), text: `${name}` },
    { name: t('filmPage.year'), text: `${year}` },
    { name: t('filmPage.country'), text: `${country}` },
    { name: t('filmPage.genre'), text: `${genre}` },
    { name: t('filmPage.time'), text: `${time}` },
    { name: t('filmPage.voiceActing'), text: `${voiceActing}` },
    { name: t('filmPage.director'), text: `${director}` },
    { name: t('filmPage.starring'), text: `${starring}` },
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
