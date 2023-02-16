import { MovieCard, Tag } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const SearchCriteria = styled.div`
  display: flex;
  width: fit-content;
  margin: 20px auto;
`;

export const Line = styled.div`
  display: block;
  width: 360px;
  height: 2px;
  margin: 20px auto;
  background-color: ${PALETTE.crimsonLite};
`;

export const TagComponent = styled(Tag)`
  margin: 0 10px;
`;

export const CardComponent = styled(MovieCard)`
  margin: 30px 0;
`;
