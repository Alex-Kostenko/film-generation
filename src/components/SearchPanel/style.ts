import { SelectComponent, DatePicker } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const DatePickerComponent = styled(DatePicker)``;
export const Select = styled(SelectComponent)``;

export const CriteriasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .selectCategory {
    @media (max-width: 968px) {
      width: 100%;
    }
    & .castom-select__control {
      @media (max-width: 968px) {
        width: 100% !important;
      }
    }
  }
  & .datePicker {
    & div {
      z-index: 2;
    }
    @media (max-width: 968px) {
      width: 100%;
      margin-bottom: 20px;
    }
    & input {
      width: 180px;
      @media (max-width: 968px) {
        width: 100%;
      }
    }

    @media (max-width: 968px) {
      /* order: 1; */
    }
  }

  @media (max-width: 968px) {
    /* flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px; */
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const WrapperFilter = styled.div`
  position: relative;
  display: inline-block;
  & .selectFilter {
    & svg {
      display: none;
    }
    & .castom-select__indicator-separator {
      display: none;
    }
  }
`;

export const SearchContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 968px) {
    margin-top: 20px;
  }

  & .wrapperInput {
    width: 415px;
    @media (max-width: 968px) {
      width: 100%;
    }
  }
  & button {
    @media (max-width: 968px) {
      width: 100%;
    }
    width: 180px;
    margin: 0px;
  }
  @media (max-width: 968px) {
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const NavigationForPages = styled.div`
  display: flex;
  justify-content: center;
  max-width: 640px;
  margin: 0 auto;
  margin-top: 50px;
  @media (max-width: 968px) {
    margin: 0 50px;
    margin-top: 50px;
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
