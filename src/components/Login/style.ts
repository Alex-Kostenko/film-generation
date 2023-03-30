import styled from 'styled-components';

import { PALETTE } from '@/palette';

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
`;
