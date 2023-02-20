import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  z-index: 20;
`;

export const Title = styled.h1`
  max-width: 500px;
  margin-left: 140px;
  font-size: 30px;
  user-select: none;
  color: ${PALETTE.white};
  @media (max-width: 960px) {
    max-width: 400px;
    font-size: 25px;
    margin-left: 120px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Description = styled.p`
  display: -webkit-box;
  max-width: 500px;
  font-size: 20px;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0 0 140px;
  font-size: 16px;
  user-select: none;
  color: ${PALETTE.white};

  @media (max-width: 960px) {
    max-width: 400px;
    font-size: 15px;
    margin-left: 120px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 38px;
  margin-top: 20px;
  margin-left: 140px;
  font-family: 'Urbanist';
  background: ${PALETTE.crimson.middle};
  font-weight: 600;
  letter-spacing: 1.8px;
  color: ${PALETTE.white};
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transition: 0.4s;
    background: ${PALETTE.crimson.dark};
  }

  @media (max-width: 960px) {
    margin-left: 120px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
