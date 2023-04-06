import styled from 'styled-components';

interface StyleTitle {
  color: string;
}

interface StyleWrapper {
  wrapperStyle: string;
}

export const Wrapper = styled.div<StyleWrapper>`
  margin-top: ${(props) => props.wrapperStyle};
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Title = styled.span<StyleTitle>`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  letter-spacing: 1px;
  user-select: none;
  color: ${(props) => props.color};
`;
