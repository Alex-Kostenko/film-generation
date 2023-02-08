import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';

import {
  ReactSlick,
  SerchPanel,
  Select,
  DatePickerComponent,
  Btn,
  SiderBar,
  WrapperSvg,
  Root,
  InputEl,
} from './style';

const HomePage = () => {
  const router = useRouter();

  const [searchCriteria, setSearchCriteria] = useState({
    category: 'horor',
    filmByCompany: 'netflix',
  });

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
    <Root>
      <ReactSlick>REACT SLICK</ReactSlick>
      <div>{searchCriteria.category}</div>
      <SerchPanel>
        <Image
          className="ellipse_5"
          src={'/ellipse_5.svg'}
          height={500}
          width={550}
          alt={'ellipse_5'}
        />
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
        <InputEl />
        <Btn label="Search" onClick={redirect} />
      </SerchPanel>
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
  );
};

export default HomePage;
