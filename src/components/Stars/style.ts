import styled from 'styled-components';

interface StyleProps {
  colorStyle: string;
}

interface StylePropsTest {
  styleTest: string;
}

export const Wrapper = styled.div<StylePropsTest>`
  margin-top: ${(props) => props.styleTest};
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Title = styled.span<StyleProps>`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  letter-spacing: 1px;
  user-select: none;
  color: ${(props) => props.colorStyle};
`;
