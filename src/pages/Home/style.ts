import {
  Button,
  SelectComponent,
  DatePicker,
  Input,
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

export const SerchPanel = styled.div`
  display: flex;
  margin: 30px 0;
  position: relative;
  column-gap: 100px;
  row-gap: 40px;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
  & .ellipse_5 {
    position: absolute;
    top: -170%;
    left: 10%;
    transform: rotate(240deg);
    z-index: -1;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1245px) {
    scale: 0.8;
  }
  @media (max-width: 1070px) {
    scale: 0.7;
  }
`;

export const DatePickerComponent = styled(DatePicker)`
  display: block;
  width: 20%;
  margin: 10px auto !important;
`;

export const InputEl = styled(Input)``;

export const Btn = styled(Button)`
  display: block;
  width: 20%;
  margin: 10px auto !important;
`;

export const Select = styled(SelectComponent)`
  display: block;
  width: 20%;
  margin: 10px auto !important;
`;

export const SiderBar = styled.div`
  width: 50px;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 0.4) 50%,
    rgba(29, 29, 29, 0.4) 0%
  );
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
`;

export const ReactSlick = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #a5a9ab;
  @media (max-width: 1600px) {
    scale: 0.8;
  }
  @media (max-width: 1070px) {
    scale: 0.7;
  }
`;
