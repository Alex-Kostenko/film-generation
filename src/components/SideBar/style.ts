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
    width: 31px;
    cursor: pointer;
    height: 23px;
  }
  & .activeSvg {
    transform: scale(1.2);
  }
  & .blur {
    filter: blur(1px);
  }
  & .tooltipCinema,
  .tooltipStar {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    transition: all 0.3s;
  }

  & .triangle:hover + .tooltipStar {
    visibility: visible;
  }
  & .triangle:hover + .tooltipCinema {
    visibility: visible;
  }
  & .userIcon {
    scale: 1.2;

    & path {
      &:hover {
        fill: ${PALETTE.crimson.middle};
      }
    }
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
    position: relative;
    fill: rgba(29, 29, 29, 1);
    pointer-events: all;
    transition: all 0.3s;
    &:hover {
      fill: ${PALETTE.crimson.middle};
    }
  }
`;
