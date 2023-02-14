import { Button, Input } from '@Alex-Kostenko/ui-filmgen-v2';
// eslint-disable-next-line
import useToggle from 'hook/useToggle';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import LeftArrow from '@/components/Arrows/LeftArrow';
import RightArrow from '@/components/Arrows/RightArrow';
import ModalComponent from '@/components/ModalComponent';

import BurgerM from '../../../public/burgerM.svg';
import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';

import {
  SearchContainer,
  ReactSlick,
  CriteriasContainer,
  Select,
  DatePickerComponent,
  // Btn,
  SiderBar,
  WrapperSvg,
  Root,
  BurgerHeader,
  ModalContent,
  WrapperRow,
  LeftArroww,
  RightArroww,
  NavigationForPages,
} from './style';

interface descroptionSlider {
  img: any;
  description: string;
}

interface IName {
  option: any;
  action: string;
  name: string;
}

interface IValue {
  value: string;
  label: string;
}

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

  const changeCriteria = (value: IValue, name: IName) => {
    setSearchCriteria((prev) => {
      return { ...prev, [name.name]: value.value };
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

  const dateForSlider = [
    {
      description: 'cit odun',
      img: <img src="http://placekitten.com/g/400/201" />,
    },
    {
      description: 'cit dwa',
      img: <img src="http://placekitten.com/g/400/200" />,
    },
    {
      description: 'cit tru',
      img: <img src="http://placekitten.com/g/400/204" />,
    },
  ];

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
            {dateForSlider?.map((item: descroptionSlider, index: number) => {
              return <div key={index}>{item.img}</div>;
            })}
          </Slider>
        </ReactSlick>
        <NavigationForPages>
          <CriteriasContainer>
            <Select
              className="selectCategory"
              placeholder="Genre"
              onChange={(value: IValue, name: IName) =>
                changeCriteria(value, name)
              }
              options={optionsGenre}
              name="category"
            />
            <DatePickerComponent className="datePicker" />
            <Select
              className="selectFilmCompany"
              placeholder="Studio"
              onChange={changeCriteria}
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
