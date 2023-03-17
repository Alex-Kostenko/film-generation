import { useTranslation } from 'next-i18next';
import { FC } from 'react';

import { IFilmInfoProps } from '@/interfaces';
import { Genres } from '@/utils/genres';

import {
  DescriptionContainer,
  DescriptionName,
  DescriptionItem,
  DescriptionText,
  TagComponent,
  TagBox,
} from './style';

const FilmInfo: FC<IFilmInfoProps> = ({
  voteAverage,
  budget,
  studio,
  country,
  genre,
  name,
  year,
  time,
}) => {
  const { t } = useTranslation();
  const ITEM = [
    { name: t('filmPage.name'), text: name },
    { name: t('filmPage.year'), text: year },
    { name: t('filmPage.country'), text: country },
    {
      name: t('filmPage.genre'),
      text: (
        <TagBox>
          {genre.map((item: number) => (
            <TagComponent
              className="tag-small"
              label={t(`genres.${Genres[item]}`)}
            />
          ))}
        </TagBox>
      ),
    },
    { name: t('filmPage.time'), text: time },
    { name: t('filmPage.studio'), text: studio },
    { name: t('filmPage.budget'), text: budget },
    { name: t('filmPage.voteAverage'), text: voteAverage },
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
