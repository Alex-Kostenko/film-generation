import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const FooterComponent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: ${PALETTE.dark.darkGrey};
`;

export const FooterText = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: fit-content;
  margin: 0px auto;
  column-gap: 10px;
  color: ${PALETTE.white};
  & .logoBurger {
    border-radius: 50%;
    cursor: pointer;
  }
  & .link {
    color: ${PALETTE.white};
    text-decoration: none !important;
  }
`;
