import { useTranslation } from 'next-i18next';
import { FC } from 'react';

import queryMovie from '@/Services/queryMovies';
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
    { name: t('filmPage.name'), text: `${name}` },
    { name: t('filmPage.year'), text: `${year}` },
    { name: t('filmPage.country'), text: `${country}` },
    {
      name: t('filmPage.genre'),
      text: (
        <TagBox>
          {genre.map((item: any) => (
            <TagComponent
              className="tag-small"
              label={t(`genres.${Genres[item]}`)}
            />
          ))}
        </TagBox>
      ),
    },
    { name: t('filmPage.time'), text: `${time}` },
    { name: t('filmPage.studio'), text: `${studio}` },
    { name: t('filmPage.budget'), text: `${budget}` },
    { name: t('filmPage.voteAverage'), text: `${voteAverage}` },
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

export async function getStaticPaths({ locales }: any) {
  const ids = await queryMovie.getAllId();

  const paths = ids.flatMap((id: string) => {
    return locales.map((locale: string) => {
      return {
        params: { id: id.toString() },
        locale: locale,
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export default FilmInfo;
