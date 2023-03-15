import { SelectComponent } from 'alex-unicode';
import styled from 'styled-components';

import { PALETTE } from '@/palette';

export const ArrowUploadWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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

  @media (max-width: 600px) {
    position: relative !important;
    margin-top: 15px;
  }
`;
