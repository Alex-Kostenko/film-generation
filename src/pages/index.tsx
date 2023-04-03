import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import SearchPanel from '@/components/SearchPanel';
import SliderSlick from '@/components/Slider';
import { ILocale, MovieEntity } from '@/interfaces';

import { PanelWrapper, Root } from '../styles/indexStyles/style';

interface IHomePage {
  popylarMovies: MovieEntity[];
}

const HomePage: FC<IHomePage> = () =>
  // { popylarMovies }
  {
    const [movieRating, setMovieRating] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [testArray, setArray] = useState([]);

    useEffect(() => {
      (async () => {
        const testRes = await queryMovie.getPopularMovie();
        setArray(testRes);
      })();
    }, []);

    return (
      <>
        <Head>
          <title>Main</title>
        </Head>
        <Root>
          <SliderSlick propMovies={testArray} />
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
  // const popylarMovies = await queryMovie.getPopularMovie();
  // console.log('TEEEST', popylarMovies);

  return {
    props: {
      // popylarMovies,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default HomePage;
