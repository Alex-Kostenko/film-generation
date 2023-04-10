import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  & .triangle {
    margin-top: 40px;
    cursor: pointer;
    fill: ${PALETTE.dark.darkBlack};
    pointer-events: all;
    transition: all 0.3s;
  }
`;

export const Text = styled.div`
  color: ${PALETTE.white};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${PALETTE.crimson.middle};
  }
`;

export const WrapperRow = styled.div`
  display: flex;
  align-items: end;
  column-gap: 10px;
  height: 30px;
`;
