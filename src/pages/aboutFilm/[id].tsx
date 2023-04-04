import axios from 'axios';
import Head from 'next/head';
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
import { AboutFilmServerSideProps, IAboutFilmProps } from '@/interfaces';
import {
  handleSetColorLastElem,
  minutesToHours,
  cutString,
} from '@/utils/aboutFilm';
import { srcNoImage } from '@/utils/constants';

import {
  LinkConteiner,
  TrailerText,
  AboutFilms,
  Container,
  Title,
  LinkTitle,
  FilmImage,
  Link,
  Root,
} from '../../styles/aboutFilmStyles/style';

const AboutFilm: FC<IAboutFilmProps> = ({ movie, id, apiKey }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [rezkaLink, setRezkaLink] = useState('');
  const [trailerLink, setTrailerLink] = useState('');
  const [errorLink, setErrorLink] = useState(false);
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

  const { origin_country: country, name: studio } = production_companies[0] || {
    origin_country: '',
    name: '',
  };

  //TODO ENV bad name
  const src = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;

  useEffect(() => {
    (async () => {
      const rezkaLink = await queryMovie.getRezka(id);
      setRezkaLink(rezkaLink.link);

      const trailerLink = await queryMovie.getTrailer(id);
      if (trailerLink && trailerLink.key) {
        setTrailerLink(trailerLink.key);
      } else {
        setErrorLink(true);
      }
    })();
  }, []);

  useEffect(() => {
    let language: string;

    switch (router.locale) {
      //TODO move to ENUM all  country
      case 'ua':
        language = 'uk';
        break;
      case 'ru':
        language = 'ru';
        break;
      default:
        language = 'en';
    }

    //TODO link env
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
      <Head>
        <title>About movie</title>
      </Head>
      <Root>
        <BackBtn onClick={() => router.back()} />
        <Title>{title}</Title>
        <Container>
          <FilmImage>
            <Image
              priority={true}
              className="filmID"
              //TODO check src
              height={src ? 450 : 280}
              //TODO check src
              width={src ? 300 : 280}
              unoptimized={true}
              src={src ? src : srcNoImage}
              alt={'movie_img'}
            />
          </FilmImage>
          <FilmInfo
            name={original_title}
            year={cutString(release_date)}
            country={country}
            genre={genre_ids.map((item: number) => item)}
            time={minutesToHours(runtime)}
            studio={studio}
            budget={numeral(budget).format('$0,0')}
            voteAverage={cutString(vote_average)}
          />
        </Container>
        <AboutFilms>
          {handleSetColorLastElem(convertedText.replace('&#39;', "'"))}
        </AboutFilms>
        {errorLink ? (
          <TrailerText>{t('filmPage.trailerText')}</TrailerText>
        ) : trailerLink ? (
          <VideoPlayer link={trailerLink} />
        ) : (
          <Loader />
        )}
        <LinkConteiner>
          <LinkTitle>{t('filmPage.links')}:</LinkTitle>
          //TODO move to func
          {rezkaLink && (
            <Link href={rezkaLink} target={'_blank'}>{`${t(
              'filmPage.watch',
            )} "${router.locale === 'en' ? original_title : title}" ${t(
              'filmPage.on',
            )} hdRezka`}</Link>
          )}
        </LinkConteiner>
      </Root>
    </>
  );
};

export async function getServerSideProps({
  locale,
  params,
}: AboutFilmServerSideProps) {
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

export default AboutFilm;
