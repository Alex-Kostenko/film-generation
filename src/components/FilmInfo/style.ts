import { Tag } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  @media (max-width: 991px) {
    width: fit-content;
    justify-content: space-around;
    margin-left: 15px;
    margin-top: 5px;
  }

  @media (max-width: 750px) {
    width: fit-content;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    padding-left: 30px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  align-items: baseline;
  @media (max-width: 991px) {
    margin-bottom: 15px;
  }
`;

export const DescriptionName = styled.div`
  margin-right: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${PALETTE.beige};
  @media (max-width: 991px) {
    min-width: 150px;
    margin-right: 30px;
    font-size: 13px;
  }
`;

export const DescriptionText = styled.div`
  letter-spacing: 1px;
  font-size: 16px;
  color: ${PALETTE.white};
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagComponent = styled(Tag)`
  margin: 0 10px 0 0;

  @media (max-width: 991px) {
    margin: 3px 10px 0 0;
  }
`;
