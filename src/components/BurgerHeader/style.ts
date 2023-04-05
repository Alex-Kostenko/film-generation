import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const BurgerM = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  margin-right: 13px;
  cursor: pointer;
  & .bgTop,
  .bgMid,
  .bgBot {
    align-self: flex-end;
    height: 2px;
    width: 100%;
    background: ${PALETTE.white};
  }

  & .bgMid {
    width: 75%;
    transition: all 200ms ease-in-out;
  }

  & .bgBot {
    width: 50%;
    transition: all 400ms ease-in-out;
  }
  &:hover .bgTop,
  .bgMid,
  .bgBot {
    width: 100%;
  }

  &:hover .bgTop {
    animation: burger-hover 1s infinite ease-in-out alternate;
  }
  &:hover .bgMid {
    animation: burger-hover 1s infinite ease-in-out alternate forwards 200ms;
  }
  &:hover .bgBot {
    animation: burger-hover 1s infinite ease-in-out alternate forwards 400ms;
  }

  @keyframes burger-hover {
    0% {
      width: 100%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const BurgerTop = styled.span`
  top: 6px;
`;
export const BurgerMid = styled.span`
  top: 15px;
`;
export const BurgerBot = styled.span`
  top: 24px;
`;

export const BurgerHeader = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    height: 45px;
    width: 100%;
    background: ${PALETTE.gray};
    align-items: center;
    top: 0%;
    z-index: 3;
    background: ${PALETTE.siderBarGradient};
  }

  & .logoBurger {
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    display: block;
  }
  & .menuStyle {
    border-radius: 50%;
    cursor: pointer;
    margin-right: 5px;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0, -50%);
    fill: ${PALETTE.white};
  }
`;
