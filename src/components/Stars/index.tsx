import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IStars } from '@/interfaces';
import { PALETTE } from '@/palette';

import { Wrapper, Title } from './style';

const Stars: FC<IStars> = ({ setMovieRating, movieRating }) => {
  const handleRating = (rate: number) => {
    setMovieRating(rate * 2);
  };

  return (
    <Wrapper>
      <Title>Rating</Title>
      <Rating
        allowFraction={true}
        transition={true}
        initialValue={movieRating / 2}
        size={31}
        fillColor={PALETTE.crimson.middle}
        onClick={handleRating}
      />
    </Wrapper>
  );
};

export default Stars;
