import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import queryMovie from '@/Services/queryMovies';
import SliderText from '@/components/SliderText';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { IMovieData } from '@/interfaces';
import { settingsSlider } from '@/utils/constants';

import { RightArroww, LeftArroww, ReactSlick, Mask } from './style';

const SliderSlick = () => {
  const [popylarMovies, setPopylarMovies] = useState([]);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const popylarMovies = await queryMovie.getPopularMovie();

      setPopylarMovies(popylarMovies);
    })();
  }, []);

  return (
    <ReactSlick>
      <LeftArroww onClick={() => sliderRef.current.slickPrev()}>
        <LeftArrow />
      </LeftArroww>
      <RightArroww onClick={() => sliderRef.current.slickNext()}>
        <RightArrow />
      </RightArroww>
      <Slider ref={sliderRef} {...settingsSlider}>
        {popylarMovies?.map((item: IMovieData, index: number) => (
          <div key={index}>
            <Mask />
            <SliderText movieData={item} />
            <img
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}`}
            />
          </div>
        ))}
      </Slider>
    </ReactSlick>
  );
};

export default SliderSlick;
