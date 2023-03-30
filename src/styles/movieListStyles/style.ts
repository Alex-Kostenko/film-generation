import { MovieCard } from 'alex-unicode';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

interface StyleProps {
  colorStyle?: string;
}

export const Paginate = styled(ReactPaginate)`
  flex-wrap: wrap;
`;

export const TextEmptyFilm = styled.div`
  color: ${PALETTE.white};
  font-family: 'Roboto';
  font-weight: 400;
`;

export const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 2px solid ${PALETTE.crimsonTransparent};
  border-bottom: 2px solid ${PALETTE.crimsonTransparent};

  @media (max-width: 968px) {
    display: block;
    padding: 30px;
  }

  @media (max-width: 600px) {
    display: block;
    padding: 10px;
    padding-left: 25px;
  }
`;

export const CardComponent = styled(MovieCard)`
  margin: 30px 0;
  & .movie-title_rus {
    font-weight: 500;
  }
  & .movie-text {
    font-family: 'Roboto';
    font-weight: 400;
    letter-spacing: 1px;
  }

  & .movie-link-img {
    width: 250px;
  }

  @media (max-width: 768px) {
    & .movie-link-img {
      margin: 0 auto;
    }
  }
`;
export const Root = styled.div<StyleProps>`
  @media (max-width: 1100px) {
    padding: 0 60px;
  }
  @media (max-width: 600px) {
    padding: 35px 12px 0 12px;
  }
  & .paginateClass {
    display: flex;
    position: relative;
    justify-content: center;
    color: white;
    box-sizing: border-box;
    margin: 40px 0px;

    & li {
      display: block;
      margin: 5px;
      cursor: pointer;
      font-family: Urbanist;
      font-weight: 700;
      box-sizing: border-box;

      & a {
        align-items: center;
        padding: 8px 16px;
        display: block;
      }
      & ${(props) => props.colorStyle} {
        padding: 8px 16px;
        border: 1px solid ${PALETTE.crimson.middle};
        border-radius: 6px;
      }
    }
    & li:hover {
      transition: all 0.2s;
      background-color: ${PALETTE.dark.darkGrey};
      border-radius: 6px;
    }
  }

  & .active {
    border: 1px solid ${PALETTE.crimson.middle};
    border-radius: 6px;
  }
  & .reload {
    width: 35px;
    height: 35px;
    transition: all 1s ease-in-out;
    cursor: pointer;
    & path {
      fill: ${PALETTE.crimson.middle} !important;
    }
  }
  & .loading {
    animation: rotation 1s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
