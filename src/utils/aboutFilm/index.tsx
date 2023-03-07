import numeral from 'numeral';

import { ColorOfLastElement, FirstColorOfletter } from './style';

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

export const handleSetColorLastElem = (overview: string) => {
  const res = overview.split(' ');
  const secondContent = res.splice(-1, 1).join('').split('');
  const resultSecondContent = secondContent.splice(-1, 1);
  return (
    <>
      <FirstColorOfletter>{res.join(' ')}</FirstColorOfletter> {secondContent}
      <ColorOfLastElement>{resultSecondContent}</ColorOfLastElement>
    </>
  );
};
