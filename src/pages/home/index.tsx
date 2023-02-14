import { Button, Input, SelectComponent } from '@Alex-Kostenko/ui-filmgen-v2';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import ModalComponent from '@/components/ModalComponent';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { IDescroptionSlider, ICriteria, IName } from '@/interfaces';
import { dateForSlider, optionsGenre, optionsStudio } from '@/utils/constants';
import useToggle from '@/utils/hooks/useToggle';

import BurgerM from '../../../public/burgerM.svg';
import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';

import {
  DatePickerComponent,
  NavigationForPages,
  CriteriasContainer,
  SearchContainer,
  BurgerHeader,
  ModalContent,
  RightArroww,
  ReactSlick,
  WrapperSvg,
  WrapperRow,
  LeftArroww,
  SiderBar,
  Root,
} from './style';

const HomePage = () => {
  const router = useRouter();
  const [isModalOpen, openModal, closeModal] = useToggle();
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
  };

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

  return (
    <>
      <Root>
        <ReactSlick>
          <LeftArroww onClick={() => sliderRef.current.slickPrev()}>
            <div>
              <LeftArrow />
            </div>
          </LeftArroww>
          <RightArroww onClick={() => sliderRef.current.slickNext()}>
            <div>
              <RightArrow />
            </div>
          </RightArroww>
          <Slider ref={sliderRef} {...settings}>
            {dateForSlider?.map((item: IDescroptionSlider, index: number) => {
              return <div key={index}>{item.img}</div>;
            })}
          </Slider>
        </ReactSlick>
        <NavigationForPages>
          <CriteriasContainer>
            <SelectComponent
              className="selectCategory"
              placeholder="Genre"
              onChange={(name: IName, criteria: ICriteria) =>
                changeCriteria(name, criteria)
              }
              options={optionsGenre}
              name="category"
            />
            <DatePickerComponent className="datePicker" />
            <SelectComponent
              className="selectFilmCompany"
              placeholder="Studio"
              onChange={(name: IName, criteria: ICriteria) =>
                changeCriteria(name, criteria)
              }
              options={optionsStudio}
              name="filmByCompany"
            />
          </CriteriasContainer>
          <SearchContainer>
            <Input />
            <Button label="Search" onClick={redirect} />
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
