import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IStars } from '@/interfaces';
import { PALETTE } from '@/palette';

import { Wrapper, Title } from './style';

const Stars: FC<IStars> = ({
  setMovieRating,
  movieRating,
  rating,
  style,
  query,
  setQuery,
}) => {
  const handleRating = (rate: number) => {
    setQuery({ ...query, currentPage: 0 });
    setMovieRating(rate * 2);
  };

  return (
    <Wrapper styleTest={style.margin}>
      <Title colorStyle={style.color}>{rating}</Title>
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
