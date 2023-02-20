import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Img = styled(Image)`
  position: absolute;
  left: 60px;
  top: 20px;
  z-index: 50;
  font-size: 16px;
  background: transparent;
  cursor: pointer;
  border: none;
  stroke: ${PALETTE.crimson.middle}
  transition: 0.4s;
  -webkit-transition: 0.4s;

  &:hover {
    transition: 0.4s;
    transform: scale(1.2);
  }

   @media (max-width: 600px) {
    left: 10px;
  }
`;
