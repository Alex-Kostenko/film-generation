import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Button = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 16px;
  background: transparent;
  cursor: pointer;
  color: ${PALETTE.crimson};
  border: none;
  transition: 0.4s;

  &:hover {
    color: ${PALETTE.beige};
    transition: 0.4s;
  }
`;
