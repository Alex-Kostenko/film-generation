import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
import FilmInfo from '@/components/FilmInfo';
import { IAboutFilmProps } from '@/interfaces';

import {
  LinkConteiner,
  AboutFilms,
  Container,
  LinkTitle,
  FilmImage,
  Title,
  Link,
} from '../../styles/aboutFilmStyles/style';

const AboutFilm: FC<IAboutFilmProps> = ({
  resultFilmID,
  rezkaLink,
  microsoftLink,
}) => {
  const {
    title,
    release_date,
    genre_ids,
    runtime,
    budget,
    vote_average,
    production_companies,
    overview,
  } = resultFilmID;

  const { t } = useTranslation();
  const src =
    resultFilmID.poster_path &&
    `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${resultFilmID.poster_path}`;

  return (
    <>
      <BackBtn />
      <Title>{resultFilmID.original_title}</Title>
      <Container>
        <FilmImage>
          <Image
            className="filmID"
            height={400}
            width={330}
            loader={() => src}
            src={src}
            alt={'logoBurger'}
          />
        </FilmImage>

        <FilmInfo
          name={title}
          year={release_date}
          country={production_companies[0].origin_country}
          genre={genre_ids}
          time={String(runtime / 60)}
          studio={production_companies[0].name}
          budget={budget}
          voteAverage={vote_average}
        />
      </Container>
      <AboutFilms>{overview}</AboutFilms>
      <LinkConteiner>
        <LinkTitle>{t('filmPage.links')}:</LinkTitle>
        <Link href={rezkaLink.link}>first link</Link>
        <Link href={microsoftLink.link}>second link</Link>
      </LinkConteiner>
    </>
  );
};

export async function getServerSideProps({ locale, query }: any) {
  const resultFilmID = await queryMovie.getByID(query.id);
  const rezkaLink = await queryMovie.getRezka(query.id);
  const microsoftLink = await queryMovie.getMicrosoft(query.id);

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      resultFilmID,
      rezkaLink,
      microsoftLink,
    },
  };
}

export default AboutFilm;
