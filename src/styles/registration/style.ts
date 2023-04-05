import styled from 'styled-components';

import { PALETTE } from '@/palette';

interface Iresize {
  sizeHeight: number;
}

export const Root = styled.div<Iresize>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.sizeHeight}px;

  & .activeclass {
    border-bottom: 7px solid ${PALETTE.crimson.middle} !important;
    color: ${PALETTE.crimson.middle};
  }

  & .line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${PALETTE.lightPink};
    margin: 15px 0 15px 0;
  }
  & .login,
  .registrationTag {
    width: 50%;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid ${PALETTE.crimson.middle};
    transition: all 0.3s;
    &:hover {
      color: ${PALETTE.crimson.middle};
    }
  }

  & .labelCheckBox {
    display: flex;
    align-items: center;
    position: relative;
  }

  & .inputCheckBox {
    width: 0;
    height: 0;
    opacity: 0;
  }

  & .labelCheckBox > span {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    border: 2px solid ${PALETTE.drab};
    margin-right: 15px;
    border-radius: 3px;
    transition: all 0.3s;
  }

  & .inputCheckBox:checked + label > span {
    border: 10px solid ${PALETTE.crimson.middle};
    animation: bounce 250ms;
    position: relative;
  }

  & .inputCheckBox:checked + label > span::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -6px;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: checked-box 125ms 250ms forwards;
  }

  @keyframes checked-box {
    0% {
      width: 0;
      height: 0;
      border-color: ${PALETTE.gray};
      transform: translate(0, 0) rotate(45deg);
    }
    33% {
      width: 4px;
      height: 0;
      border-color: ${PALETTE.gray};
      transform: translate(0, 0) rotate(45deg);
    }
    100% {
      width: 4px;
      height: 8px;
      border-color: ${PALETTE.gray};
      transform: translate(0, -8px) rotate(45deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    33% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const WrapperRagistration = styled.div`
  padding: 15px 20px;
  width: 360px;
  min-height: 150px;
  border: 1px solid white;
  border-bottom-right-radius: 15px;
  border-bottom: 3px solid red;
  background-color: ${PALETTE.white};
  z-index: 0;
`;

export const TopBox = styled.div`
  margin-bottom: 15px;
`;
export const BottomBox = styled.div`
  margin-top: 20px;
`;
export const WarepperNavigation = styled.div`
  width: 100%;
  display: flex;
`;
export const LoginModal = styled.div``;
export const RegistrationTag = styled.div``;
export const TextBox = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const TextPrivacy = styled.div`
  font-weight: 300;
  font-size: 15px;
`;
