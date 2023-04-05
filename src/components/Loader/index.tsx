import { CSSProperties } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

import { PALETTE } from '@/palette';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: PALETTE.crimson.middle,
};

const Loader = () => {
  return (
    <div className="sweet-loading">
      <CircleLoader
        color={PALETTE.crimson.middle}
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
