import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Title = styled.h1`
  width: fit-content;
  margin: 10px auto 20px auto;
  font-size: 30px;
  color: ${PALETTE.crimson.middle};

  @media (max-width: 600px) {
    margin-top: 50px;
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
