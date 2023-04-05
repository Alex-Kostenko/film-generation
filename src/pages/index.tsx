import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FC, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import SearchPanel from '@/components/SearchPanel';
import SliderSlick from '@/components/Slider';
import { ILocale, MovieEntity } from '@/interfaces';

import { PanelWrapper, Root } from '../styles/indexStyles/style';

interface IHomePage {
  popylarMovies: MovieEntity[];
  moviePoster: string;
}

const HomePage: FC<IHomePage> = ({ popylarMovies, moviePoster }) => {
  const [movieRating, setMovieRating] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Root>
        <SliderSlick moviePoster={moviePoster} propMovies={popylarMovies} />
        <PanelWrapper>
          <SearchPanel
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            movieRating={movieRating}
            setMovieRating={setMovieRating}
          />
        </PanelWrapper>
      </Root>
    </>
  );
};

export const getServerSideProps = async ({ locale }: ILocale) => {
  const popylarMovies = await queryMovie.getPopularMovie();

  return {
    props: {
      moviePoster: process.env.POSTER_IMAGE,
      popylarMovies,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default HomePage;
