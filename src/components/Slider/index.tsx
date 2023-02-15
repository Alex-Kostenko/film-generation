import { useRef } from 'react';
import Slider from 'react-slick';

import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';

import { LeftArroww, ReactSlick, RightArroww } from './style';

interface descriptionSlider {
  img: any;
  description: string;
}

const SliderSlick = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
  };

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
        {dateForSlider?.map((item: descriptionSlider, index: number) => (
          <div key={index}>{item.img}</div>
        ))}
      </Slider>
    </ReactSlick>
  );
};

export default SliderSlick;
