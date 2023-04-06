import { Button } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Title = styled.h1`
  width: fit-content;
  margin: 10px auto 30px auto;
  font-size: 30px;
  color: ${PALETTE.crimson.middle};

  @media (max-width: 600px) {
    margin: 16px 0 20px 20px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 1090px) {
    margin-left: 60px;
  }

  @media (max-width: 900px) {
    justify-content: space-around;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const ImgContainer = styled.div`
  @media (max-width: 600px) {
    width: fit-content;
    margin: 10px auto;
  }
`;

export const LogoutButton = styled(Button)`
  max-width: 100px;
  position: absolute;
  top: -72px;
  right: 12%;
  margin: 10px;

  @media (max-width: 1092px) {
    right: 9%;
  }

  @media (max-width: 600px) {
    margin-right: 20px;
    right: 0;
    top: -68px;
  }
`;
