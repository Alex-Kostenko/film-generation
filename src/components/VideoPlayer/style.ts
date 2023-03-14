import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  position: relative;
  padding-top: 56.25%;

  @media (max-width: 1100px) {
    margin-left: 60px;
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
