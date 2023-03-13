import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import numeral from 'numeral';
import { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
import FilmInfo from '@/components/FilmInfo';
import Loader from '@/components/Loader';
import VideoPlayer from '@/components/VideoPlayer';
import { IAboutFilmProps } from '@/interfaces';
import {
  cutString,
  handleSetColorLastElem,
  minutesToHours,
} from '@/utils/aboutFilm';

import {
  LinkConteiner,
  AboutFilms,
  Container,
  LinkTitle,
  FilmImage,
  Title,
  Link,
} from '../../styles/aboutFilmStyles/style';

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

export async function getStaticProps({ locale, params }: any) {
  const movie = await queryMovie.getByID(params.id);

  return {
    props: {
      apiKey: process.env.GOOGLE_TRANSLATE_API_KEY,
      ...(await serverSideTranslations(locale)),
      movie,
      id: params.id,
    },
  };
}

const AboutFilm: FC<IAboutFilmProps> = ({ movie, id, apiKey }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const [rezkaLink, setRezkaLink] = useState('');
  const [trailerLink, setTrailerLink] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const {
    title,
    release_date,
    genre_ids,
    runtime,
    budget,
    vote_average,
    production_companies,
    overview,
    original_title,
  } = movie;

  const src: any =
    movie.poster_path &&
    `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;

  useEffect(() => {
    (async () => {
      const trailerLink = await queryMovie.getTrailer(id);
      setTrailerLink(trailerLink.key);

      const rezkaLink = await queryMovie.getRezka(id);
      setRezkaLink(rezkaLink?.link);
    })();
  }, []);

  useEffect(() => {
    let language: string;

    switch (router.locale) {
      case 'ua':
        language = 'uk';
        break;
      case 'ru':
        language = 'ru';
        break;
      default:
        language = 'en';
    }
    axios
      .post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: overview,
            target: language,
            key: apiKey,
          },
        },
      )
      .then((response) => {
        setConvertedText(response.data.data.translations[0].translatedText);
      });
  }, [overview, router.locale]);

  return (
    <>
      <BackBtn onClick={() => router.back()} />
      <Title>{title}</Title>
      <Container>
        <FilmImage>
          <Image
            className="filmID"
            height={450}
            width={300}
            loader={() => src}
            src={src}
            alt={'logoBurger'}
          />
        </FilmImage>
        <FilmInfo
          name={original_title}
          year={cutString(release_date)}
          country={production_companies![0].origin_country}
          genre={genre_ids.map((item: number) => item)}
          time={minutesToHours(runtime)}
          studio={production_companies![0].name}
          budget={numeral(budget).format('$0,0')}
          voteAverage={cutString(vote_average)}
        />
      </Container>
      <AboutFilms>{handleSetColorLastElem(convertedText)}</AboutFilms>
      {trailerLink ? <VideoPlayer link={trailerLink} /> : <Loader />}
      <LinkConteiner>
        <LinkTitle>{t('filmPage.links')}:</LinkTitle>
        {rezkaLink && (
          <Link href={rezkaLink}>{`${t('filmPage.watch')} "${title}" ${t(
            'filmPage.on',
          )} hdRezka`}</Link>
        )}
      </LinkConteiner>
    </>
  );
};

export default AboutFilm;
