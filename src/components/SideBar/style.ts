import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const SiderBar = styled.div`
  width: 50px;
  height: 100%;
  background: ${PALETTE.siderBarGradient};
  position: absolute;
  z-index: 3;
  top: 0%;
  left: 0%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: none;
  }
  & .svgLanguage {
    width: 30px;
    cursor: pointer;
    height: 25px;
  }
  & .blur {
    filter: blur(2px);
  }
`;

export const WarpperLanguage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-bottom: 50px;
`;

export const WrapperSvg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .triangle {
    margin-top: 60px;
    cursor: pointer;
    fill: rgba(29, 29, 29, 1);
    pointer-events: all;
    transition: all 0.3s;
    &:hover {
      fill: ${PALETTE.crimson.middle};
    }
  }
`;
