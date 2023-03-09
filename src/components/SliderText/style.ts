import { Tag, Button } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Container = styled.div`
  position: absolute;
  top: 5%;
  z-index: 20;
  padding: 20px;
  background: rgb(0, 0, 0, 10%);
`;

export const TagContainer = styled.div`
  max-width: 550px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TagComponent = styled(Tag)`
  margin: 10px 10px 0 0;
  margin-top: 10px;
`;

export const Title = styled.h1`
  max-width: 550px;
  margin-left: 20%;
  font-size: 30px;
  user-select: none;
  color: ${PALETTE.white};
  @media (max-width: 960px) {
    max-width: 400px;
    font-size: 25px;
  }

  @media (max-width: 600px) {
    max-width: 320px;
    margin-left: 10%;
  }
`;

export const Description = styled.p`
  display: -webkit-box;
  max-width: 550px;
  font-size: 20px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0 0 20%;
  font-size: 16px;
  user-select: none;
  color: ${PALETTE.white};

  @media (max-width: 960px) {
    max-width: 400px;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    max-width: 320px;
    margin-left: 10%;
  }
`;

export const Btn = styled(Button)`
  margin-top: 15px;
  margin-left: 20%;

  @media (max-width: 600px) {
    margin-left: 10%;
  }
`;
