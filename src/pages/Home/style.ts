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
  justify-content: space-around;
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
