import { Button, Input } from 'alex-unicode';
import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Img = styled(Image)`
  position: absolute;
  right: 3px;
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
  margin: 0 0 20px 40px;
  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export const EditButton = styled(Button)`
  max-width: 120px;
  margin: 0 0 0 auto;

  @media (max-width: 500px) {
    position: absolute;
    top: -55px;
  }
`;

export const ErrorText = styled.span`
  display: block;
  font-size: 10px;
  margin-top: 5px;
  color: ${PALETTE.error};
  font-family: 'SFProDisplay-Light';
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-bottom: 15px;
  padding-right: 5px;

  @media (max-width: 991px) {
    margin-top: 5px;
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }

  :first-child {
    border-bottom: 1px solid ${PALETTE.crimson.lite};
  }
`;

export const InformationItem = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    :first-child {
      margin-top: 60px;
    }
  }
`;

export const InformationName = styled.div`
  margin-right: 5px;
  min-width: 60px;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${PALETTE.beige};

  @media (max-width: 991px) {
    margin-right: 5px;
    font-size: 13px;
  }
`;

export const InformationText = styled.div`
  letter-spacing: 1px;
  font-size: 16px;
  color: ${PALETTE.white};

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const InputComponent = styled(Input)``;

export const Password = styled(Information)``;

export const PasswordItem = styled(InformationItem)`
  @media (max-width: 500px) {
    flex-direction: column;

    :first-child {
      margin-top: 0px;
    }
  }
`;

export const PasswordName = styled(InformationName)`
  min-width: 140px;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const PasswordText = styled(InformationText)``;
