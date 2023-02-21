import { MovieCard, Tag } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

interface StyleProps {
  colorStyle?: string;
}

export const SearchCriteria = styled.div`
  display: flex;
  width: fit-content;
  margin: 20px auto;
`;

// export const Line = styled.div`
//   display: block;
//   width: 360px;
//   height: 2px;
//   margin: 20px auto;
//   background-color: ${PALETTE.crimson.lite};
// `;

export const TagComponent = styled(Tag)`
  margin: 0 10px;
`;

export const CardComponent = styled(MovieCard)`
  margin: 30px 0;
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
`;

export const ArrowUploadWrapper = styled.div`
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
`;
