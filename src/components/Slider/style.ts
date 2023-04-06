import styled from 'styled-components';

import { PALETTE } from '@/palette';

interface StyleRoot {
  sliderSize: string;
}

export const Root = styled.div<StyleRoot>`
  height: ${(props) => props.sliderSize};

  .slick-slide img {
    width: 100%;
    height: ${(props) => props.sliderSize};
    object-fit: cover;
  }
`;

export const ReactSlick = styled.div`
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100vh;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 9;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 7%);
`;

export const LeftArroww = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  cursor: pointer;
  background: ${PALETTE.leftArrowGradient};
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const RightArroww = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  cursor: pointer;
  background: ${PALETTE.rightArrowGradient};
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;
