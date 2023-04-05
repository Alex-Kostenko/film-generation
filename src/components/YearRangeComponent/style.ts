import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Root = styled.div`
  & .yrp-picker-box {
    background-color: ${PALETTE.crimson.middle} !important;
    height: 38px;
    width: 180px;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Urbanist';
    transition: 0.25s;
  }

  & .yrp-picker-box span {
    color: ${PALETTE.white};
    font-family: 'Urbanist';
    font-weight: 700;
  }

  & .yrp-picker-box i {
    border-color: ${PALETTE.white};
  }

  & .yrp-picker-box:hover,
  .custom-year-range-picker .yrp-picker-box:focus {
    box-shadow: 0.3em 0.3em 0 0 ${PALETTE.beige},
      inset 0.3em 0.3em 0 0 ${PALETTE.beige};
    cursor: pointer;
    color: ${PALETTE.white};
    border-color: ${PALETTE.dark.darkGrey};
    background-color: ${PALETTE.crimson.middle} !important;
  }
  & .yrp-container {
    min-width: 0px;
    border: none;
  }
`;
