import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const WrapperEmptyFilm = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .emptyFilms {
    transform: scaleX(-1);

    & path {
      fill: ${PALETTE.crimson.middle};
    }
  }
`;

export const TextEmptyFilm = styled.div`
  color: ${PALETTE.white};
  font-family: 'Roboto';
  font-weight: 400;
`;
