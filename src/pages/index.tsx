import { Button, Input } from 'alex-unicode';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import ModalComponent from '@/components/ModalComponent';
import SliderSlick from '@/components/Slider';
import { ICriteria, IName } from '@/interfaces';
import { optionsStudio, optionsGenre } from '@/utils/constants';
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
  WrapperRow,
  Select,
  Root,
  WrapperBtn,
} from './style';

const HomePage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [isModalOpen, openModal, closeModal] = useToggle();

  const [searchCriteria, setSearchCriteria] = useState({
    category: 'horor',
    filmByCompany: 'netflix',
  });

  const changeCriteria = (name: IName, criteria: ICriteria) => {
    setSearchCriteria((prev) => {
      return { ...prev, [criteria.name]: name.value };
    });
  };

  const redirect = () => {
    router.push(
      `/movieList?category=${searchCriteria.category}&filmByCompany=${searchCriteria.filmByCompany}`,
    );
  };

  // useEffect(() => {
  //   (async () => {
  //     const companies = await queryMovie.getAllFilter();
  //     console.log(companies);
  //   })();
  // }, []);

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
                onChange={(name: IName, criteria: ICriteria) =>
                  changeCriteria(name, criteria)
                }
                options={optionsGenre}
                name="category"
              />
              <DatePickerComponent className="datePicker" />
              <Select
                className="selectCategory"
                placeholder={t('main.studio')}
                onChange={(name: IName, criteria: ICriteria) =>
                  changeCriteria(name, criteria)
                }
                options={optionsStudio}
                name="filmByCompany"
              />
            </CriteriasContainer>
            <SearchContainer>
              <Input label={t('main.search')} />
              <Button label={t('main.search')} onClick={redirect} />
            </SearchContainer>
          </WrapperBtn>
          <Image
            className="ellipse_4"
            src={'/ellipse_4.svg'}
            height={400}
            width={400}
            alt={'ellipse_4'}
            blurDataURL={'/ellipse_4.svg'}
            priority={true}
          />
          <Image
            className="ellipse_4_1"
            src={'/ellipse_4_1.svg'}
            height={400}
            width={400}
            alt={'ellipse_4'}
            blurDataURL={'/ellipse_4_1.svg'}
            priority={true}
          />
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
