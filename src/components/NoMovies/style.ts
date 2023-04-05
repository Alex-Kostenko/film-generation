import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const WrapperNoMovie = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .noMovies {
    transform: scaleX(-1);

    & path {
      fill: ${PALETTE.crimson.middle};
    }
  }
`;

export const TextNoMovies = styled.div`
  color: ${PALETTE.white};
  font-family: 'Roboto';
  font-weight: 400;
`;
