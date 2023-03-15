import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FC, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import ModalComponent from '@/components/ModalComponent';
import SearchPanel from '@/components/SearchPanel';
import SliderSlick from '@/components/Slider';
import { ILocale, MovieEntity } from '@/interfaces';
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
}

const HomePage: FC<IHomePage> = ({ popylarMovies }) => {
  const [movieRating, setMovieRating] = useState(1);
  const [isModalOpen, openModal, closeModal] = useToggle();
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
              <p style={{ color: 'white' }}>Star</p>
              <Star className="triangle" aria-label="Star" />
            </WrapperRow>
          </ModalContent>
        </ModalComponent>
      )}
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
