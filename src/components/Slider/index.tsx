import { useRef } from 'react';
import Slider from 'react-slick';

import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { IDescroptionSlider } from '@/interfaces';
import { dateForSlider, settingsSlider } from '@/utils/constants';

import { LeftArroww, Mask, ReactSlick, RightArroww } from './style';

const SliderSlick = () => {
  const sliderRef = useRef<any>(null);

  return (
    <ReactSlick>
      <Mask />
      <LeftArroww onClick={() => sliderRef.current.slickPrev()}>
        <LeftArrow />
      </LeftArroww>
      <RightArroww onClick={() => sliderRef.current.slickNext()}>
        <RightArrow />
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
