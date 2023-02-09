import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding-top: 15px;
  font-size: 25px;
  color: #f33f3f;
`;

export const AboutFilms = styled.p`
  margin-top: 30px;
  font-size: 15px;
  font-family: SFProDisplay-Light;
  letter-spacing: 3px;
  line-height: 20px;
  color: #e4dada;
  @media (max-width: 991px) {
    padding: 0 15px;
    font-size: 13px;
  }
`;

export const Video = styled.video`
  width: 45%;
  @media (max-width: 991px) {
    display: block;
    margin: 20px auto;
    width: 100%;
  }
`;

export const LinkConteiner = styled.div`
  margin-top: 20px;
  @media (max-width: 991px) {
    margin-top: 10px;
    padding: 0 15px;
  }
`;

export const LinkTitle = styled.h3`
  letter-spacing: 1px;
  color: #e4dada;
`;

export const Link = styled.a`
  display: block;
  width: fit-content;
  margin: 10px 0;
  cursor: pointer;
  color: #f33f3f;
  text-decoration: none;
`;
