import { SelectComponent, DatePicker } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Title = styled.h1`
  display: block;
  width: fit-content;
  color: blueviolet;
  font-size: 25px;
  margin: 0 auto;
  padding-top: 15px;
`;

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
export const WrapperBtn = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 15%;
  z-index: 2;
  width: 700px;
  padding: 40px;
  background-color: rgb(0, 0, 0, 20%);

  @media (max-width: 968px) {
    display: block;
    width: 400px;
    padding: 30px;
  }

  @media (max-width: 600px) {
    display: block;
    width: 300px;
    padding: 20px;
  }
`;

export const SearchContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const DatePickerComponent = styled(DatePicker)``;

export const Select = styled(SelectComponent)``;

export const Root = styled.div`
  height: 100vh;
  overflow: clip;

  li.slick-active > button::before {
    color: ${PALETTE.crimson.middle} !important;
  }

  .slick-slide img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 10px;
  }
`;

export const BurgerHeader = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    height: 45px;
    width: 100%;
    background: ${PALETTE.gray};
    position: absolute;
    top: 0%;
    z-index: 2;
    background: ${PALETTE.siderBarGradient};
  }
  & .logoBurger {
    border-radius: 50%;
    cursor: pointer;
    margin-left: 5px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  & .menuStyle {
    border-radius: 50%;
    cursor: pointer;
    margin-right: 5px;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0, -50%);
    fill: ${PALETTE.white};
  }
`;

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

export const LeftArroww = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  cursor: pointer;
  background: ${PALETTE.leftArrowGradient};
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightArroww = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  cursor: pointer;
  background: ${PALETTE.rightArrowGradient};
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
