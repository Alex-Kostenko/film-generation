import numeral from 'numeral';

import { PALETTE } from '@/palette';

export const cutString = (str: string | number) => {
  return str.toString().substring(0, 4);
};

export const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = numeral(hours).format('0');
  const formattedMinutes = numeral(remainingMinutes).format('00');
  return `${formattedHours}:${formattedMinutes}`;
};

export const handleSetColorLastElem = (text: string) => {
  return (
    <span>
      <span style={{ color: PALETTE.crimson.middle, fontSize: '1.3rem' }}>
        {text.charAt(0)}
      </span>
      {text.substring(1, text.length - 1)}
      <span style={{ color: PALETTE.crimson.middle, fontSize: '1.4rem' }}>
        {text.charAt(text.length - 1)}
      </span>
    </span>
  );
};
