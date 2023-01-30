import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  width: fit-content;
  color: blueviolet;
  font-size: 25px;
  margin: 0 auto;
  padding-top: 15px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const AboutFilms = styled.p`
  margin-top: 30px;
  font-size: 18px;
  padding: 0 15px;
`;

export const Video = styled.video`
  width: 45%;
  @media (max-width: 991px) {
    display: block;
    margin: 20px auto;
    width: 100%;
  }
`;
