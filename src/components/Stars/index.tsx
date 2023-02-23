import React, { FC } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IStars } from '@/interfaces';
import { PALETTE } from '@/palette';

const Stars: FC<IStars> = ({ setRating }) => {
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating
        size={31}
        fillColor={PALETTE.crimson.middle}
        onClick={handleRating}
      />
    </div>
  );
};

export default Stars;
