import styled from 'styled-components';

export const CriteriasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .rootDatePicker {
    @media (max-width: 968px) {
      width: 100%;
    }
  }
  & .rootDatePicker .yrp-container {
    @media (max-width: 968px) {
      width: 100%;
    }
  }

  & .rootDatePicker .yrp-picker-box {
    @media (max-width: 968px) {
      width: 100%;
    }
  }

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

  @media (max-width: 968px) {
    /* flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px; */
    flex-direction: column;
    row-gap: 15px;
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
