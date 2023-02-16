import { useRef } from 'react';
import Slider from 'react-slick';

import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { IDescroptionSlider } from '@/interfaces';
import { dateForSlider, settingsSlider } from '@/utils/constants';

import { LeftArroww, ReactSlick, RightArroww } from './style';

const SliderSlick = () => {
  const sliderRef = useRef<any>(null);

  return (
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
      <Slider ref={sliderRef} {...settingsSlider}>
        {dateForSlider?.map((item: IDescroptionSlider, index: number) => (
          <div key={index}>{item.img}</div>
        ))}
      </Slider>
    </ReactSlick>
  );
};

export default SliderSlick;
