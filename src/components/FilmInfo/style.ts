import styled from 'styled-components';

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

export const DescriptionName = styled.span`
  display: block;
  width: 100px;
  margin-right: 50px;
  font-size: 15px;
  letter-spacing: 1px;
  color: #e4dada;
  @media (max-width: 991px) {
    width: 80px;
    margin-right: 30px;
    font-size: 13px;
  }
`;

export const DescriptionText = styled.span`
  letter-spacing: 1px;
  font-size: 16px;
  color: #ffffff;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;
