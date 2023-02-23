import { Button, Input } from 'alex-unicode';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import ModalComponent from '@/components/ModalComponent';
import SliderSlick from '@/components/Slider';
import Stars from '@/components/Stars';
import { ISelectOptions, ISelectedFilms } from '@/interfaces';
import useToggle from '@/utils/hooks/useToggle';

import BurgerM from '../../public/burgerM.svg';
import CinemaLine from '../../public/cinemaLine.svg';
import Home from '../../public/home.svg';
import Star from '../../public/star.svg';
import {
  DatePickerComponent,
  NavigationForPages,
  CriteriasContainer,
  SearchContainer,
  ModalContent,
  BurgerHeader,
  WrapperBtn,
  WrapperRow,
  Select,
  Root,
} from '../styles/indexStyles/style';

const HomePage = () => {
  const [searchGenre, setSearchGenre] = useState<ISelectedFilms[]>([]);
  const [isModalOpen, openModal, closeModal] = useToggle();
  const [rating, setRating] = useState(0.5);
  const [genres, setGenres] = useState([]);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const genres = await queryMovie.getGenres();

      genres.forEach(
        (n: ISelectOptions) => (
          (n.value = n.id), (n.label = n.name), delete n.name, delete n.id
        ),
      );

      setGenres(genres);
    })();
  }, []);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setSearchGenre(selectedFilms);
  };

  const redirect = () => {
    router.push(
      `/movieList?categories=${searchGenre.map(
        (element: ISelectedFilms) => element.label,
      )}&rating=${rating}`,
    );
  };

  return (
    <>
      <Root>
        <SliderSlick />
        <NavigationForPages>
          <WrapperBtn>
            <CriteriasContainer>
              <Select
                className="selectCategory"
                placeholder={t('main.genre')}
                onChange={(selectedFilms: ISelectedFilms[]) =>
                  changeGenre(selectedFilms)
                }
                options={genres}
              />
              <DatePickerComponent className="datePicker" />
              <Stars setRating={setRating} />
            </CriteriasContainer>
            <SearchContainer>
              <Input label={t('main.search')} />
              <Button label={t('main.search')} onClick={redirect} />
            </SearchContainer>
          </WrapperBtn>
        </NavigationForPages>
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

export default HomePage;

export const getStaticProps = async ({ locale }: any) => {
  const allFilters = await queryMovie.getAllFilter();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      allFilters: allFilters,
    },
  };
};
