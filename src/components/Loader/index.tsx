import { CSSProperties } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  //TODO use color pallet
  borderColor: '#f33f3f',
};

const Loader = () => {
  return (
    <div className="sweet-loading">
      <CircleLoader
        color="#f33f3f"
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
