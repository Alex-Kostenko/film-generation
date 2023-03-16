import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IYearRange } from '@/interfaces';
import { Genres } from '@/utils/genres';

import { SearchContainer, TagComponent } from './style';

interface ITagContainerProps {
  yearMovie: IYearRange | 'empty';
  arrayCategoriesId: number[];
  searchTerm: string;
  rating: number;
  valueFilter: string;
}

const TagContainer: FC<ITagContainerProps> = ({
  arrayCategoriesId,
  valueFilter,
  searchTerm,
  yearMovie,
  rating,
}) => {
  const { t } = useTranslation();
  const [label, setlabel] = useState<string | null>('');

  useEffect(() => setlabel(t('movieList.rating')));
  return (
    <SearchContainer>
      {rating && (
        <TagComponent className="tag-medium" label={`${label}${rating / 2}★`} />
      )}
      {yearMovie !== 'empty' && (
        <TagComponent
          className="tag-medium"
          label={`${yearMovie.startYear}/${yearMovie.endYear}`}
        />
      )}
      {valueFilter !== 'popularity' && (
        <TagComponent
          className="tag-medium"
          label={t(`filterTag.${valueFilter}`)}
        />
      )}
      {searchTerm && <TagComponent className="tag-medium" label={searchTerm} />}
      {arrayCategoriesId &&
        arrayCategoriesId.map((categoriesId: number) => (
          <TagComponent
            className="tag-medium"
            label={t(`genres.${Genres[categoriesId]}`)}
          />
        ))}
    </SearchContainer>
  );
};

export default TagContainer;
