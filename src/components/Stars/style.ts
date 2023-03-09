import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Wrapper = styled.div`
  margin-top: 15px;
  position: relative;
`;

export const Title = styled.span`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  letter-spacing: 1px;
  user-select: none;
  color: ${PALETTE.white};
`;
