import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectedFilms, IYearRange } from '@/interfaces';
import { Genres } from '@/utils/genres';

import { SearchContainer, TagComponent } from './style';

interface ITagContainerProps {
  setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectedFilms[]>>;
  setYearMovie: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  setArrayCategoriesId: React.Dispatch<React.SetStateAction<number[]>>;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setValueFilter: React.Dispatch<React.SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedOptions: ISelectedFilms[];
  yearMovie: IYearRange | 'empty';
  arrayCategoriesId: number[];
  valueFilter: string;
  searchTerm: string;
  rating: number;
}

const TagContainer: FC<ITagContainerProps> = ({
  setArrayCategoriesId,
  setSelectedOptions,
  arrayCategoriesId,
  selectedOptions,
  setMovieRating,
  setValueFilter,
  setSearchTerm,
  setYearMovie,
  valueFilter,
  searchTerm,
  yearMovie,
  rating,
}) => {
  const { t } = useTranslation();
  const [label, setlabel] = useState<string | null>('');

  const deleteYear = () => {
    setYearMovie('empty');
  };

  const deleteRating = () => {
    setMovieRating(1);
  };

  const deleteSearchString = () => {
    setSearchTerm('');
  };

  const deleteFilter = () => {
    setValueFilter('popularity');
  };

  const deleteGenre = (categoriesId: number) => {
    const newArrayId = arrayCategoriesId.filter(
      (item) => item !== categoriesId,
    );
    setArrayCategoriesId(newArrayId);

    const newArrValue = selectedOptions.filter(
      (n) => n.value !== String(categoriesId),
    );
    setSelectedOptions(newArrValue);
  };

  useEffect(() => setlabel(t('movieList.rating')));
  return (
    <SearchContainer>
      {rating && (
        <TagComponent
          cross={true}
          className="tag-search"
          label={`${label}${rating / 2}★`}
          onClick={deleteRating}
        />
      )}
      {yearMovie !== 'empty' && (
        <TagComponent
          className="tag-search"
          label={`${yearMovie.startYear}/${yearMovie.endYear}`}
          onClick={deleteYear}
          cross={true}
        />
      )}
      {valueFilter !== 'popularity' && (
        <TagComponent
          onClick={deleteFilter}
          cross={true}
          className="tag-search"
          label={t(`filterTag.${valueFilter}`)}
        />
      )}
      {searchTerm && (
        <TagComponent
          onClick={deleteSearchString}
          cross={true}
          className="tag-search"
          label={searchTerm}
        />
      )}
      {arrayCategoriesId &&
        arrayCategoriesId.map((categoriesId: number) => (
          <TagComponent
            onClick={() => deleteGenre(categoriesId)}
            cross={true}
            className="tag-search"
            label={t(`genres.${Genres[categoriesId]}`)}
          />
        ))}
    </SearchContainer>
  );
};

export default TagContainer;
