import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

import { ILocale, ISliderTextProps } from '@/interfaces';
import { Genres } from '@/utils/genres';
import { Paths } from '@/utils/paths';

import {
  TagComponent,
  TagContainer,
  Description,
  Container,
  Btn,
  Title,
} from './style';

const SliderText: FC<ISliderTextProps> = ({ movieData }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const redirect = (id: number) => {
    router.push(`${Paths.aboutFilm}/${id}`);
  };

  return (
    <Container>
      <Title>{movieData.title}</Title>
      <TagContainer>
        {movieData.genre_ids.map((movie, index) => (
          <TagComponent
            key={index}
            className="tag-small"
            label={t(`genres.${Genres[movie]}`)}
          />
        ))}
      </TagContainer>

      <Description>{movieData.overview}</Description>
      <Btn value={t('main.go')} onClick={() => redirect(movieData.id)} />
    </Container>
  );
};

export default SliderText;

export const getStaticProps = async ({ locale }: ILocale) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
