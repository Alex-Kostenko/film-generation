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
    color: ${PALETTE.white};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    transition: all 0.3s;
  }

  & .uniCode_icon:hover + .tooltipLogo {
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

export const WrapperTooltip = styled.div`
  position: relative;
  & .logo {
    border-radius: 6px;
  }
`;

export const Tooltip = styled.div`
  &:hover {
    visibility: visible;
  }
  position: absolute;
  visibility: hidden;
  top: 23px;
  left: 55px;
  width: 120px;
  background-color: ${PALETTE.dark.darkBlack};
  color: ${PALETTE.white};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  transition: all 0.3s;
  & .link {
    color: ${PALETTE.white};
    text-decoration: none !important;
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
  & .icon {
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

  & .register {
    width: 21px;
    margin-top: 60px;
    cursor: pointer;
    position: relative;
    fill: ${PALETTE.white};
    pointer-events: all;
    transition: all 0.3s;
    &:hover {
      fill: ${PALETTE.crimson.middle};
    }
  }

  & .uniCode_icon {
    width: 32px;
    height: 32px;
    margin-top: 45px;
    margin-bottom: 50px;
    cursor: pointer;
    border-radius: 50%;
  }

  & .user_icon {
    scale: 1.2;
    margin-top: 60px;
    cursor: pointer;
    position: relative;
    fill: ${PALETTE.white};
    pointer-events: all;
    transition: all 0.3s;
    &:hover {
      fill: ${PALETTE.crimson.middle};
    }
  }

  & .active {
    fill: ${PALETTE.crimson.middle};
    stroke: ${PALETTE.crimson.middle};
    scale: 1.1;
  }

  & .user_icon_active {
    fill: ${PALETTE.crimson.middle};
    stroke: ${PALETTE.crimson.middle};
    scale: 1.3;
  }
`;
