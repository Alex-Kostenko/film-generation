import { SelectComponent, MovieCard, Tag } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

interface StyleProps {
  colorStyle?: string;
}

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0 10px 0;
  flex-wrap: wrap;
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
    width: 400px;
    padding: 30px;
  }

  @media (max-width: 600px) {
    display: block;
    width: 300px;
    padding: 20px;
  }
`;

export const TagComponent = styled(Tag)`
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  padding: 5px;
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
`;
export const Root = styled.div<StyleProps>`
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

export const ArrowUploadWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
`;

export const Text = styled.div`
  font-family: Urbanist;
  font-weight: 700;
  font-size: 18px;
  color: ${PALETTE.white};
  margin-left: 20px;
  margin-right: 20px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    transition: 0.3s all;
    color: ${PALETTE.crimson.middle};
  }
`;

export const Select = styled(SelectComponent)`
  position: absolute !important;
  right: 0;
  top: 0;
  & .castom-select__control {
    width: fit-content !important;
  }
  & .castom-select__menu {
    width: 100% !important;
  }
`;
