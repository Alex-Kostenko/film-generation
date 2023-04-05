import React, { FC } from 'react';
import Slider from 'react-slick';

import SliderText from '@/components/SliderText';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { MovieEntity } from '@/interfaces';
import { settingsSlider } from '@/utils/constants';

import { RightArroww, LeftArroww, ReactSlick, Mask } from './style';

interface IHomePage {
  propMovies: MovieEntity[];
  moviePoster: string;
}

const SliderSlick: FC<IHomePage> = ({ propMovies, moviePoster }) => {
  const sliderRef = React.createRef<Slider>();

  return (
    <ReactSlick>
      <LeftArroww onClick={() => sliderRef.current?.slickPrev()}>
        <LeftArrow />
      </LeftArroww>
      <RightArroww onClick={() => sliderRef.current?.slickNext()}>
        <RightArrow />
      </RightArroww>
      <Slider ref={sliderRef} {...settingsSlider}>
        {propMovies.map((item, index) => (
          <div key={index}>
            <Mask />
            <SliderText movieData={item} />
            <img
              alt="slider img"
              //TODO add logic for check mobile device
              src={`${moviePoster}${item.poster_path}`}
            />
          </div>
        ))}
      </Slider>
    </ReactSlick>
  );
};

export default SliderSlick;
