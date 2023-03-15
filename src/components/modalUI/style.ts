import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Root = styled.div``;
export const ModalContent = styled.div`
  width: 100%;
  height: 300px;
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
export const WrapperRow = styled.div`
  display: flex;
  align-items: end;
  column-gap: 10px;
  cursor: pointer;
  &:hover {
    & .triangle {
      fill: ${PALETTE.crimson.middle};
    }
  }
  height: 30px;
`;
