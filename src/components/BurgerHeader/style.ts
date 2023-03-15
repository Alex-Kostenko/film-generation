import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const BurgerHeader = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    height: 45px;
    width: 100%;
    background: ${PALETTE.gray};
    position: absolute;
    top: 0%;
    z-index: 3;
    background: ${PALETTE.siderBarGradient};
  }
  & .logoBurger {
    border-radius: 50%;
    cursor: pointer;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
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
