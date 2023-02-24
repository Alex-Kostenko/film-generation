import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IStars } from '@/interfaces';
import { PALETTE } from '@/palette';

const Stars: FC<IStars> = ({ setMovieRating, movieRating }) => {
  const handleRating = (rate: number) => {
    setMovieRating(rate);
  };

  return (
    <div className="App">
      <Rating
        allowFraction={true}
        transition={true}
        initialValue={movieRating}
        size={31}
        fillColor={PALETTE.crimson.middle}
        onClick={handleRating}
      />
    </div>
  );
};

export default Stars;
