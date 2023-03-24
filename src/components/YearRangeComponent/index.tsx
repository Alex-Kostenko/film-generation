import { useTranslation } from 'next-i18next';
import React, { FC, SetStateAction } from 'react';
import { YearRangePicker } from 'react-year-range-picker';

import { IQuery, IYearRange } from '@/interfaces';

import { Root } from './style';

interface IYearRangePickerComponent {
  setYearSearch?: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  yearMovie?: IYearRange | 'empty';
  setYearMovie?: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  query: IQuery;
  setQuery: React.Dispatch<
    SetStateAction<{
      currentPage: number;
      count: number;
      arrowUpload: boolean;
      isLoading: boolean;
      pageSize: number;
    }>
  >;
}

const YearRangePickerComponent: FC<IYearRangePickerComponent> = ({
  setYearSearch,
  yearMovie,
  setYearMovie,
  query,
  setQuery,
}) => {
  const { t }: any = useTranslation();

  const handleOnchange = (startYear: number, endYear: number) => {
    setQuery({ ...query, currentPage: 0 });
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
