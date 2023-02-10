import {
  // Button,
  SelectComponent,
  DatePicker,
} from '@Alex-Kostenko/ui-filmgen-v2';
import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  width: fit-content;
  color: blueviolet;
  font-size: 25px;
  margin: 0 auto;
  padding-top: 15px;
`;

// export const SerchPanel = styled.div`
//   display: flex;
//   margin: 30px 0;
//   position: relative;
//   column-gap: 100px;
//   row-gap: 40px;
//   flex-wrap: wrap;
//   overflow: hidden;
//   justify-content: space-around;
//   & .ellipse_5 {
//     position: absolute;
//     top: -170%;
//     left: 10%;
//     transform: rotate(240deg);
//     z-index: -1;
//   }
//   @media (max-width: 767px) {
//     flex-direction: column;
//     align-items: center;
//   }
//   @media (max-width: 1245px) {
//     scale: 0.8;
//   }
//   @media (max-width: 1070px) {
//     scale: 0.7;
//   }
// `;

export const CriteriasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    justify-content: space-around;
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
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 0.4) 50%,
    rgba(29, 29, 29, 0.4) 0%
  );
  position: absolute;
  z-index: 3;
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
      fill: #f33f3f;
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
  }

  li.slick-active > button::before {
    color: #f33f3f !important;
  }
  .slick-slide img {
    width: 100%;
    height: 450px;
    @media (max-width: 1340px) {
      height: 400px;
    }
  }

  .slick-dots {
    bottom: 10px;
  }
`;

export const ReactSlick = styled.div`
  position: absolute;
  z-index: 2;
  height: 450px;
  width: 100%;
  left: 0px;
  top: 0px;

  @media (max-width: 1340px) {
    height: 400px;
  }
`;

export const BurgerHeader = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    height: 45px;
    width: 100%;
    background: gray;
    position: absolute;
    top: 0%;
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
    fill: white;
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
    fill: rgba(29, 29, 29, 1);
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
      fill: #f33f3f;
    }
  }
  height: 30px;
`;

export const LeftArroww = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  cursor: pointer;
  background: linear-gradient(
    270deg,
    rgba(29, 29, 29, 0) 0%,
    rgba(30, 19, 19, 1) 100%
  );
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
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 0) 0%,
    rgba(30, 19, 19, 1) 100%
  );
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperForAbsolute = styled.div`
  margin-top: 490px;
`;
