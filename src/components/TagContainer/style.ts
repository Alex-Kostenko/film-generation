import { Tag } from 'alex-unicode';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0 10px 0;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding-left: 25px;
  }
`;

export const TagComponent = styled(Tag)`
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  padding: 5px;
  padding-right: 14px;
`;
