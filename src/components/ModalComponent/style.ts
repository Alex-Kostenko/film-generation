import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const MainContainer = styled.div`
  display: block;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${PALETTE.dark.darkModal};
  z-index: 10;
  & .logoBurger {
    border-radius: 50%;
    cursor: pointer;
    margin-top: 8px;
    margin-left: 5px;
    position: absolute;
    top: 0%;
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

export const ButtonClose = styled.div``;
