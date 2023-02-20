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
  @media (max-width: 600px) {
    display: none;
  }
`;

export const WrapperSvg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  & .triangle {
    margin-top: 40px;
    cursor: pointer;
    fill: rgba(29, 29, 29, 1);
    pointer-events: all;
    transition: all 0.3s;
    &:hover {
      fill: ${PALETTE.crimson.middle};
    }
  }
`;
