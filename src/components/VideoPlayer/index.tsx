import React, { FC } from 'react';

import { Container, Player } from './style';

interface IVideoPlayerProps {
  link: string;
  youTubeLink: string;
}

const VideoPlayer: FC<IVideoPlayerProps> = ({ youTubeLink, link }) => {
  return (
    <Container>
      <Player
        className="react-player"
        url={`${youTubeLink}${link}`}
        width="100%"
        height="100%"
        controls={true}
      />
    </Container>
  );
};

export default VideoPlayer;
