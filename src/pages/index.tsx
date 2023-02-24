import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FC, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import ModalComponent from '@/components/ModalComponent';
import SearchPanel from '@/components/SearchPanel';
import SliderSlick from '@/components/Slider';
import { ISelectedFilms, MovieEntity } from '@/interfaces';
import useToggle from '@/utils/hooks/useToggle';

import BurgerM from '../../public/burgerM.svg';
import CinemaLine from '../../public/cinemaLine.svg';
import Home from '../../public/home.svg';
import Star from '../../public/star.svg';
import {
  ModalContent,
  BurgerHeader,
  PanelWrapper,
  WrapperRow,
  Root,
} from '../styles/indexStyles/style';

interface IHomePage {
  popylarMovies: MovieEntity[];
  genres: ISelectedFilms[];
}

const HomePage: FC<IHomePage> = ({ popylarMovies, genres }) => {
  const [movieRating, setMovieRating] = useState(0.5);
  const [isModalOpen, openModal, closeModal] = useToggle();

  return (
    <>
      <Root>
        <SliderSlick propMovies={popylarMovies} />
        <PanelWrapper>
          <SearchPanel
            propsGenres={genres}
            movieRating={movieRating}
            setMovieRating={setMovieRating}
          />
        </PanelWrapper>
      </Root>
      <BurgerHeader>
        <Image
          className="logoBurger"
          src={'/UniCode.jpg'}
          height={30}
          width={30}
          alt={'logoBurger'}
        />
        <BurgerM
          className="menuStyle"
          onClick={openModal}
          aria-label="BurgerM"
        />
      </BurgerHeader>
      {isModalOpen && (
        <ModalComponent onClose={closeModal}>
          <ModalContent>
            <WrapperRow>
              <p style={{ color: 'white' }}>Home</p>
              <Home className="triangle" aria-label="Home" />
            </WrapperRow>
            <WrapperRow>
              <p style={{ color: 'white' }}>Cinema</p>
              <CinemaLine className="triangle" aria-label="CinemaLine" />
            </WrapperRow>
            <WrapperRow>
              <p style={{ color: 'white' }}>Star</p>{' '}
              <Star className="triangle" aria-label="Star" />
            </WrapperRow>
          </ModalContent>
        </ModalComponent>
      )}
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => {
  const allFilters = await queryMovie.getAllFilter();
  const popylarMovies = await queryMovie.getPopularMovie();
  const genres = await queryMovie.getGenres();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      allFilters: allFilters,
      popylarMovies,
      genres,
    },
  };
};

export default HomePage;
