import { SelectComponent, DatePicker } from 'alex-unicode';
import Menu from 'rc-menu';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const DatePickerComponent = styled(DatePicker)``;
export const Select = styled(SelectComponent)``;

export const Root = styled.div`
  & .filter button {
    width: 180px !important;
    height: 38px;
    background-color: ${PALETTE.crimson.middle};
    font-size: 16px;
    font-weight: 700;
    font-family: 'Urbanist';
    color: ${PALETTE.white};
    cursor: pointer;
    border: none;
    transition: 0.25s !important;
  }
  & .filter button:hover,
  .filter button:focus {
    box-shadow: 0.3em 0.3em 0 0 #e4dada, inset 0.3em 0.3em 0 0 #e4dada;
    cursor: pointer;
    color: #ffffff;
    border-color: #1f1f1f !important;
    background-color: #0d0d0d !important;
  }
`;

export const MenuFilter = styled(Menu)`
  & .labelFilter {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0 10px 0;
  }
  & .textFilter {
    font-family: 'Roboto';
    font-weight: 500;
  }
`;

export const CriteriasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .selectCategory {
    @media (max-width: 1100px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    & .castom-select__control {
      @media (max-width: 1100px) {
        width: 100% !important;
      }
    }
  }
  & .datePicker {
    & div {
      z-index: 2;
    }
    @media (max-width: 1100px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    & input {
      @media (max-width: 1100px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }

    @media (max-width: 1100px) {
      /* order: 1; */
    }
  }

  @media (max-width: 1100px) {
    /* flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px; */
    flex-direction: column;
    row-gap: 15px;
  }

  & .rootLox .yrp-container {
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
  & .rootLox {
    @media (max-width: 1100px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  & .rootLox .yrp-picker-box {
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (max-width: 1100px) {
      width: 100%;
    }
  }

  & .wrapperInput {
    @media (max-width: 1100px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const NavigationForPages = styled.div`
  display: flex;
  justify-content: center;
  max-width: 640px;
  margin: 0 auto;
  margin-top: 50px;
  @media (max-width: 1100px) {
    margin: 0 50px;
    margin-top: 50px;
  }
`;

export const WrapperFilter = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }

  & .selectFilter {
    & svg {
      display: none;
    }
    & .castom-select__indicator-separator {
      display: none;
    }
  }

  & .mainSelectStyle {
    & .castom-select__control {
      @media (max-width: 1100px) {
        width: 100% !important;
      }
    }
  }
`;

export const TopArrow = styled.div`
  cursor: pointer;
`;
export const LeftArrow = styled.div`
  cursor: pointer;
`;

export const WrapperInArrowInFilter = styled.div`
  position: absolute;
  z-index: 2;
  right: 10px;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${PALETTE.white};
  transform: translate(0, -50%);
`;
