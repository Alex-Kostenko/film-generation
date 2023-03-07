import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const FirstColorOfletter = styled.p`
  &::first-letter {
    font-size: 1.3rem;
    color: ${PALETTE.crimson.middle};
  }
`;

export const ColorOfLastElement = styled.span`
  font-size: 1.3rem;
  color: ${PALETTE.crimson.middle};
`;
