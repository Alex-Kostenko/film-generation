import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FC, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import SearchPanel from '@/components/SearchPanel';
import SliderSlick from '@/components/Slider';
import { ILocale, MovieEntity } from '@/interfaces';

import { PanelWrapper, Root } from '../styles/indexStyles/style';

interface IHomePage {
  popylarMovies: MovieEntity[];
}

const HomePage: FC<IHomePage> = ({ popylarMovies }) => {
  const [movieRating, setMovieRating] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Root>
        <SliderSlick propMovies={popylarMovies} />
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

export const getStaticProps = async ({ locale }: ILocale) => {
  const popylarMovies = await queryMovie.getPopularMovie();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      popylarMovies,
    },
  };
};

export default HomePage;
