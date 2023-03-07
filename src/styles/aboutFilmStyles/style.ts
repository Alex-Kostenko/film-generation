import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;

  @media (max-width: 1120px) {
    margin-left: 60px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding-top: 15px;
  font-size: 25px;
  color: ${PALETTE.crimson.middle};
`;

export const AboutFilms = styled.div`
  margin-top: 30px;
  font-size: 16px;
  font-family: 'Roboto';
  letter-spacing: 1px;
  line-height: 20px;
  color: ${PALETTE.beige};

  @media (max-width: 1120px) {
    margin-left: 50px;
  }

  @media (max-width: 991px) {
    padding: 0 15px;
    font-size: 13px;
  }

  @media (max-width: 600px) {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const FilmImage = styled.div`
  @media (max-width: 991px) {
    display: block;
    margin: 20px auto;
  }
`;

export const LinkConteiner = styled.div`
  margin-top: 20px;

  @media (max-width: 1120px) {
    margin-left: 50px;
  }

  @media (max-width: 991px) {
    margin-top: 10px;
    padding: 0 15px;
  }

  @media (max-width: 600px) {
    width: fit-content;
    margin: 10px auto;
  }
`;

export const LinkTitle = styled.h3`
  font-family: 'Roboto';
  letter-spacing: 1px;
  font-weight: 500;
  color: ${PALETTE.beige};
`;

export const Link = styled.a`
  display: block;
  width: fit-content;
  margin: 10px 0;
  cursor: pointer;
  color: ${PALETTE.crimson.middle};
  text-decoration: none;
`;
