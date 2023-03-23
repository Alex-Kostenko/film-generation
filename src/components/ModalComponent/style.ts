import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const WrapperClose = styled.div`
  & .close-button {
    display: block;
    width: 39px;
    height: 39px;
    position: relative;
    overflow: hidden;
    scale: 0.7;
  }

  & .close-button > div {
    position: relative;
  }

  & .close-button-block {
    width: 40px;
    height: 20px;
    position: relative;
    overflow: hidden;
  }

  & .close-button-block:before,
  .close-button-block:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(55% - 4px);
    display: block;
    width: 4px;
    height: 25px;
    transform-origin: bottom center;
    background: white;
    transition: all ease-out 280ms;
  }
  & .close-button-block:last-of-type {
    transform: rotate(180deg);
  }
  & .close-button .in .close-button-block:before {
    transition-delay: 280ms;
    transform: translateX(20px) translateY(-20px) rotate(45deg);
  }
  & .close-button .in .close-button-block:after {
    transition-delay: 280ms;
    transform: translateX(-22px) translateY(-22px) rotate(-45deg);
  }
  & .close-button .out {
    position: absolute;
    top: 0;
    left: 0;
  }
  & .close-button .out .close-button-block:before {
    transform: translateX(-5px) translateY(5px) rotate(45deg);
  }
  & .close-button .out .close-button-block:after {
    transform: translateX(5px) translateY(5px) rotate(-45deg);
  }
  & .close-button:hover .in .close-button-block:before {
    transform: translateX(-5px) translateY(5px) rotate(45deg);
  }
  & .close-button:hover .in .close-button-block:after {
    transform: translateX(5px) translateY(5px) rotate(-45deg);
  }
  & .close-button:hover .out .close-button-block:before {
    transform: translateX(-20px) translateY(20px) rotate(45deg);
  }
  & .close-button:hover .out .close-button-block:after {
    transform: translateX(20px) translateY(20px) rotate(-45deg);
  }
`;

export const MainContainer = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${PALETTE.dark.darkModal};
  z-index: 10;

  & .wrapperHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
  }

  & .logoBurger {
    border-radius: 50%;
    cursor: pointer;
    margin-left: 8px;
  }
  & .close {
    cursor: pointer;
    margin-top: 8px;
    margin-right: 5px;
    position: absolute;
    top: 0%;
    right: 0%;
  }
`;
