import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  position: relative;
  padding-top: 56.25%;
`;

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
