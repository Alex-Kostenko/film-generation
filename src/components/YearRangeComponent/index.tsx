import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import { YearRangePicker } from 'react-year-range-picker';

import { IYearRange } from '@/interfaces';

import { Root } from './style';

interface IYearRangePickerComponent {
  setYearSearch?: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  yearMovie?: IYearRange | 'empty';
  setYearMovie?: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
}

const YearRangePickerComponent: FC<IYearRangePickerComponent> = ({
  setYearSearch,
  yearMovie,
  setYearMovie,
}) => {
  const { t }: any = useTranslation();

  const handleOnchange = (startYear: number, endYear: number) => {
    setYearSearch && setYearSearch({ startYear, endYear });
    setYearMovie && setYearMovie({ startYear, endYear });
  };

  return (
    <Root className="rootDatePicker">
      <YearRangePicker
        minYear={new Date(1990, 0, 1).getFullYear()}
        maxYear={new Date().getFullYear()}
        onSelect={(startYear, endYear) => handleOnchange(startYear, endYear)}
        startYear={typeof yearMovie === 'object' ? yearMovie.startYear : 0}
        endYear={typeof yearMovie === 'object' ? yearMovie.endYear : 0}
        // classNames="custom-year-range-picker"
        startText={t('main.start')}
        endText={t('main.end')}
      />
    </Root>
  );
};

export default YearRangePickerComponent;
