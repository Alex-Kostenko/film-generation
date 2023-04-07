import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import numeral from 'numeral';
import { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import ArrowBack from '@/components/ArrowBack';
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
import { Locale } from '@/utils/locale';

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

const AboutFilm: FC<IAboutFilmProps> = ({
  translateLink,
  youTubeLink,
  imgLink,
  apiKey,
  movie,
  id,
}) => {
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

  const movieLink = `${imgLink}${movie.poster_path}`;

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
      case Locale.ukrainian:
        language = Locale.ukrainianOnGoogleTranslate;
        break;
      case Locale.russian:
        language = Locale.russian;
        break;
      default:
        language = Locale.english;
    }

    axios
      .post(
        `${translateLink}`,
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

  const generateWatchLink = (
    locale: string | undefined,
    originalTitle: string,
    title: string,
  ) => {
    const watchText = t('filmPage.watch');
    const onText = t('filmPage.on');
    const linkText = locale === 'en' ? originalTitle : title;
    return (
      <Link href={rezkaLink} target="_blank">
        {`${watchText} "${linkText}" ${onText} hdRezka`}
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>About movie</title>
      </Head>
      <Root>
        <ArrowBack onClick={() => router.back()} />
        <Title>{title}</Title>
        <Container>
          <FilmImage>
            <Image
              priority={true}
              className="filmID"
              height={movie.poster_path ? 450 : 280}
              width={movie.poster_path ? 300 : 280}
              unoptimized={true}
              src={movie.poster_path ? movieLink : srcNoImage}
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
          <VideoPlayer youTubeLink={youTubeLink} link={trailerLink} />
        ) : (
          <Loader />
        )}
        <LinkConteiner>
          <LinkTitle>{t('filmPage.links')}:</LinkTitle>
          {rezkaLink && generateWatchLink(router.locale, original_title, title)}
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
      translateLink: process.env.GOOGLE_TRANSLATE_LINK,
      youTubeLink: process.env.YOUTUBE_LINK,
      imgLink: process.env.MOVIE_PICTURE,
      apiKey: process.env.GOOGLE_TRANSLATE_API_KEY,
      ...(await serverSideTranslations(locale)),
      movie,
      id: params.id,
    },
  };
}

export default AboutFilm;
