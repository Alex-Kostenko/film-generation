import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const FooterComponent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 8px;
  background-color: ${PALETTE.dark.darkGrey};
`;
export const FooterText = styled.p`
  display: block;
  width: fit-content;
  margin: 10px auto;
  color: ${PALETTE.white};
`;
