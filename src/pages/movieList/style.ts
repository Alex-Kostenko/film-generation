import { Tag, MovieCard } from '@Alex-Kostenko/ui-filmgen';
import styled from 'styled-components';

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
  background-color: #f33f3f;
`;

export const TagComponent = styled(Tag)`
  margin: 0 10px;
`;

export const CardComponent = styled(MovieCard)`
  margin: 30px 0;
`;
