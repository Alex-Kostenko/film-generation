import React, { FC } from 'react';
import Slider from 'react-slick';

import queryMovie from '@/Services/queryMovies';
import SliderText from '@/components/SliderText';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { IMovieData, MovieEntity } from '@/interfaces';
import { settingsSlider } from '@/utils/constants';

import { RightArroww, LeftArroww, ReactSlick, Mask } from './style';

interface IHomePage {
  propMovies: MovieEntity[];
}

const SliderSlick: FC<IHomePage> = ({ propMovies }) => {
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
              //TODO move base url to env & add logic for check mobile device
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}`}
            />
          </div>
        ))}
      </Slider>
    </ReactSlick>
  );
};

export async function getServerSideProps() {
  const popylarMovies = await queryMovie.getPopularMovie();

  return {
    props: {
      popylarMovies,
    },
  };
}

export default SliderSlick;
