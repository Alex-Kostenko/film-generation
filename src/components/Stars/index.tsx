import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IStars } from '@/interfaces';
import { PALETTE } from '@/palette';

import { Wrapper, Title } from './style';

const Stars: FC<IStars> = ({ setMovieRating, movieRating, rating }) => {
  const handleRating = (rate: number) => {
    setMovieRating(rate);
  };

  return (
    <Wrapper>
      <Title>{rating}</Title>
      <Rating
        allowFraction={true}
        transition={true}
        initialValue={movieRating}
        size={31}
        fillColor={PALETTE.crimson.middle}
        onClick={handleRating}
      />
    </Wrapper>
  );
};

export default Stars;
