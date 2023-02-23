import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  @media (max-width: 991px) {
    justify-content: start;
    margin-left: 15px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
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
    width: 80px;
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
