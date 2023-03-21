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
    color: #fff;
    font-family: 'Urbanist';
    font-weight: 700;
  }

  & .yrp-picker-box i {
    border-color: #fff;
  }

  & .yrp-picker-box:hover,
  .custom-year-range-picker .yrp-picker-box:focus {
    box-shadow: 0.3em 0.3em 0 0 #e4dada, inset 0.3em 0.3em 0 0 #e4dada;
    cursor: pointer;
    color: #ffffff;
    border-color: #1f1f1f;
    background-color: rgb(243 63 63 / 0%) !important;
  }
  & .yrp-container {
    min-width: 0px;
    border: none;
  }
`;
