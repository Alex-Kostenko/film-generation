import React, { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';

import SliderText from '@/components/SliderText';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { MovieEntity } from '@/interfaces';
import { settingsSlider } from '@/utils/constants';

import { RightArroww, LeftArroww, ReactSlick, Mask, Root } from './style';

interface IHomePage {
  propMovies: MovieEntity[];
  bigPoster: string;
  smallPoster: string;
}

const SliderSlick: FC<IHomePage> = ({ propMovies, bigPoster, smallPoster }) => {
  const [windowSize, setWindowSize] = useState(900);

  useEffect(() => {
    setWindowSize(window.innerWidth);

    window.addEventListener('resize', () => setWindowSize(window.innerWidth));
  }, []);

  const sliderRef = React.createRef<Slider>();

  return (
    <Root sliderSize={windowSize > 600 ? '100vh' : '94vh'}>
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
                src={`${windowSize > 800 ? bigPoster : smallPoster}${
                  item.poster_path
                }`}
              />
            </div>
          ))}
        </Slider>
      </ReactSlick>
    </Root>
  );
};

export default SliderSlick;
