import { Button, Input } from 'alex-unicode';
import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Img = styled(Image)`
  position: absolute;
  left: 185px;
  top: 3px;
  cursor: pointer;
  stroke: ${PALETTE.crimson.middle};
  fill: ${PALETTE.crimson.middle};
  transition: 0.4s;
  -webkit-transition: 0.4s;

  &:hover {
    transition: 0.4s;
    transform: scale(1.2);
  }
`;

export const PasswordButton = styled(Button)`
  width: 220px;
  margin: 0;
`;

export const EditButton = styled(Button)`
  max-width: 100px;
  margin: 0;
`;

export const CancelButton = styled(EditButton)``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorName = styled.span`
  position: absolute;
  top: 35px;
  display: block;
  font-size: 10px;
  margin-top: 5px;
  color: ${PALETTE.error};
  font-family: 'SFProDisplay-Light';

  @media (max-width: 600px) {
    top: 268px;
  }
`;

export const ErrorEmail = styled(ErrorName)`
  top: 116px;

  @media (max-width: 600px) {
    top: 350px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 900px) {
    width: fit-content;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputComponent = styled(Input)``;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  padding: 0 20px;
  border-left: 1px solid ${PALETTE.crimson.lite};
  border-right: 1px solid ${PALETTE.crimson.lite};

  @media (max-width: 900px) {
    max-width: 260px;
    margin-bottom: 25px;
    border: 0;
  }

  @media (max-width: 600px) {
    margin: 10px auto;
  }
`;

export const DataContainer = styled(PasswordContainer)`
  @media (max-width: 900px) {
    margin-bottom: 25px;
  }
`;
