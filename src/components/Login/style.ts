import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const InutWrapper = styled.div`
  position: relative;
`;

export const Root = styled.div`
  & .wrapperInput {
    & input {
      color: ${PALETTE.dark.darkBlack};
    }
    & .mainlabel {
      color: ${PALETTE.crimson.middle};
    }
  }

  & .offset {
    &:hover {
      color: ${PALETTE.dark.darkBlack};
      box-shadow: 0.3em 0.3em 0 0 ${PALETTE.crimson.middle},
        inset 0.3em 0.3em 0 0 ${PALETTE.crimson.middle};
      border-color: ${PALETTE.crimson.middle};
    }
  }
`;

export const WrapperLoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
  margin: 40px 0 30px 0;

  & .errorField {
    position: absolute;
    color: red;
    cursor: pointer;
    top: 9px;
    right: -15px;
  }

  & .tooltipName {
    position: absolute;
    top: 5px;
    left: 250px;
    visibility: hidden;
    color: ${PALETTE.white};
    padding: 5px;
    border-radius: 6px;
    background: ${PALETTE.crimson.middle};
  }
  & .errorField:hover + .tooltipName {
    visibility: visible;
  }
`;
