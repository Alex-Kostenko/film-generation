import React, { FC } from 'react';

import { Container, Player } from './style';

interface IVideoPlayerProps {
  link: string;
}

const VideoPlayer: FC<IVideoPlayerProps> = ({ link }) => {
  return (
    <Container>
      <Player
        className="react-player"
        //TODO env
        url={`https://www.youtube.com/watch?v=${link}`}
        width="100%"
        height="100%"
        controls={true}
      />
    </Container>
  );
};

export default VideoPlayer;
