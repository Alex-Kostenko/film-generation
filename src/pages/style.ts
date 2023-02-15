import { SelectComponent, DatePicker } from '@Alex-Kostenko/ui-filmgen-v2';
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

  & .datePicker {
    @media (max-width: 750px) {
      order: 1;
    }
  }

  @media (max-width: 1100px) {
    justify-content: space-around;
  }
  @media (max-width: 750px) {
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
  }
`;

export const SearchContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 70px;
`;

export const DatePickerComponent = styled(DatePicker)``;

export const Select = styled(SelectComponent)``;

export const SiderBar = styled.div`
  width: 50px;
  height: 100%;
  background: ${PALETTE.siderBarGradient};
  position: absolute;
  z-index: 2;
  top: 0%;
  left: 0%;
  position: fixed;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const WrapperSvg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  & .triangle {
    margin-top: 40px;
    cursor: pointer;
    fill: rgba(29, 29, 29, 1);
    pointer-events: all;
    transition: all 0.3s;
    &:hover {
      fill: ${PALETTE.crimson};
    }
  }
`;

export const Root = styled.div`
  & .ellipse_4 {
    position: absolute;
    top: 16%;
    left: -8%;
    z-index: -1;
    @media (max-width: 1600px) {
      top: 25%;
      scale: 0.7;
    }
    @media (max-width: 1340px) {
      scale: 0.5;
      left: -12%;
    }
    @media (max-width: 1070px) {
      scale: 0.3;
      left: -17%;
    }
    @media (max-width: 840px) {
      left: -20%;
    }
    @media (max-width: 700px) {
      left: -25%;
    }
    @media (max-width: 600px) {
      left: -30%;
    }
    @media (max-width: 490px) {
      left: -35%;
    }
    @media (max-width: 420px) {
      left: -45%;
    }
  }
  & .ellipse_4_1 {
    position: absolute;
    top: 56%;
    right: -9%;
    z-index: -1;
    transform: rotate(180deg);
    @media (max-width: 1600px) {
      scale: 0.7;
    }
    @media (max-width: 1340px) {
      scale: 0.5;
      right: -13%;
    }
    @media (max-width: 1070px) {
      scale: 0.3;
      right: -17%;
    }
    @media (max-width: 840px) {
      right: -20%;
    }
    @media (max-width: 700px) {
      right: -25%;
    }
    @media (max-width: 600px) {
      right: -30%;
    }
    @media (max-width: 490px) {
      right: -35%;
    }
    @media (max-width: 420px) {
      right: -45%;
    }
  }

  li.slick-active > button::before {
    color: ${PALETTE.crimson} !important;
  }
  .slick-slide img {
    width: 100%;
    height: 450px;
    @media (max-width: 1340px) {
      height: 400px;
    }
    @media (max-width: 900px) {
      height: 350px;
    }
    @media (max-width: 600px) {
      height: 250px;
    }
  }

  .slick-dots {
    bottom: 10px;
  }
`;

// export const ReactSlick = styled.div`
//   position: relative;
//   z-index: 2;
//   display: block;
//   height: 450px;
//   width: 100%;
//   left: 0px;
//   top: 0px;

//   @media (max-width: 1340px) {
//     height: 400px;
//   }
//   @media (max-width: 900px) {
//     height: 350px;
//   }
//   @media (max-width: 600px) {
//     height: 250px;
//   }
// `;

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
      fill: ${PALETTE.crimson};
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
  max-width: 640px;
  margin: 0 auto;
  margin-top: 50px;
  @media (max-width: 750px) {
    margin: 0 50px;
    margin-top: 50px;
  }
`;
