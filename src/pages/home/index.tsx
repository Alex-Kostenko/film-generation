import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';
import BurgerM from '../../../public/burgerM.svg';

import {
  SearchContainer,
  ReactSlick,
  CriteriasContainer,
  Select,
  DatePickerComponent,
  Btn,
  SiderBar,
  WrapperSvg,
  Root,
  BurgerHeader,
  ModalContent,
  WrapperRow,
} from './style';
import ModalComponent from '@/components/ModalComponent';
import useToggle from 'hook/useToggle';

const HomePage = () => {
  const router = useRouter();
  const [isModalOpen, openModal, closeModal] = useToggle();

  const [searchCriteria, setSearchCriteria] = useState({
    category: 'horor',
    filmByCompany: 'netflix',
  });

  console.log(isModalOpen);

  const changeCriteria = (event: any) => {
    setSearchCriteria((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const redirect = () => {
    router.push(
      `/movieList?category=${searchCriteria.category}&filmByCompany=${searchCriteria.filmByCompany}`,
    );
  };

  const optionsGenre = [
    { value: 'horor', label: 'horor' },
    { value: 'comedy', label: 'comedy' },
    { value: 'adventure', label: 'adventure' },
    { value: 'fantasy', label: 'fantasy' },
    { value: 'detective', label: 'detective' },
    { value: 'drama', label: 'drama' },
  ];

  const optionsStudio = [
    { value: 'netflix', label: 'netflix' },
    { value: 'marvel', label: 'marvel' },
    { value: 'dc', label: 'dc' },
  ];

  return (
    <>
      <Root>
        <ReactSlick>REACT SLICK</ReactSlick>
        {/* <Image
          className="ellipse_5"
          src={'/ellipse_5.svg'}
          height={500}
          width={550}
          alt={'ellipse_5'}
        /> */}
        <CriteriasContainer>
          <Select
            placeholder="Genre"
            onChange={changeCriteria}
            options={optionsGenre}
            name="category"
          ></Select>
          <Select
            placeholder="Studio"
            onChange={changeCriteria}
            options={optionsStudio}
            name="filmByCompany"
          ></Select>
          <DatePickerComponent />
        </CriteriasContainer>
        <SearchContainer>
          <Btn label="Search" onClick={redirect} />
        </SearchContainer>
        <SiderBar>
          <WrapperSvg>
            <Image
              className="triangle"
              src={'/UniCode.jpg'}
              height={40}
              width={40}
              alt={'triangleClass'}
            />
            <Home className="triangle" aria-label="Home" />
            <CinemaLine className="triangle" aria-label="CinemaLine" />
            <Star className="triangle" aria-label="Star" />
          </WrapperSvg>
        </SiderBar>
        <Image
          className="ellipse_4"
          src={'/ellipse_4.svg'}
          height={400}
          width={400}
          alt={'ellipse_4'}
        />
        <Image
          className="ellipse_4_1"
          src={'/ellipse_4_1.svg'}
          height={400}
          width={400}
          alt={'ellipse_4'}
        />
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
