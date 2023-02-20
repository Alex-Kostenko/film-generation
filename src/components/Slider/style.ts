import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const ReactSlick = styled.div`
  position: relative;
  z-index: 2;
  display: block;
  height: 450px;
  width: 100%;
  left: 0px;
  top: 0px;

  @media (max-width: 1340px) {
    height: 400px;
  }
  @media (max-width: 900px) {
    height: 350px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 9;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.1));
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
    width: 100px;
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
`;
