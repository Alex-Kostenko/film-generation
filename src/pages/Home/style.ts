import { Button } from '@Alex-Kostenko/ui-filmgen';
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
  display: flex;
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
`;

export const Select = styled.select`
  width: 20%;
  height: 30px;
  border: 1px solid #999;
  font-size: 18px;
  color: blueviolet;
  background-color: #eee;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 80%;
    margin-bottom: 15px;
  }
`;

export const Datepicker = styled.input`
  width: 20%;
  height: 30px;
  border: 1px solid #999;
  font-size: 18px;
  color: blueviolet;
  background-color: #eee;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const Btn = styled(Button)`
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
`;

export const WrapperSvg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  & .triangle {
    margin-top: 40px;
    cursor: pointer;
    fill: yellow;
    pointer-events: all;
    &:hover {
      /* fill: yellow; */
    }
  }
`;

export const Root = styled.div`
  & .ellipse_4 {
    position: absolute;
    top: 16%;
    left: -8%;
    z-index: 0;
  }
  & .ellipse_4_1 {
    position: absolute;
    top: 56%;
    right: -9%;
    z-index: 0;
    transform: rotate(180deg);
  }
`;

export const ReactSlick = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #a5a9ab;
`;
