import styled from 'styled-components';

import { PALETTE } from '@/palette';

interface IStyle {
  customStyle: any;
}

export const Root = styled.div<IStyle>`
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

  & .name:focus {
    background-color: ${(prop) => prop.customStyle.name};
  }
  & .email:focus {
    background-color: ${(prop) => prop.customStyle.email};
  }
  & .password:focus {
    background-color: ${(prop) => prop.customStyle.password};
  }
  & .againPass:focus {
    background-color: ${(prop) => prop.customStyle.againPass};
  }
`;

export const WrapperLoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
  margin: 40px 0 30px 0;
  & .wrapperaName {
    position: relative;
  }
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
    right: -75px;
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
