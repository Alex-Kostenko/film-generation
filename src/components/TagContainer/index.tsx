import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IFilter, ISelectedFilms, IYearRange } from '@/interfaces';
import { Genres } from '@/utils/genres';

import { SearchContainer, TagComponent } from './style';

interface ITagContainerProps {
  setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectedFilms[]>>;
  setYearMovie: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  setArrayCategoriesId: React.Dispatch<React.SetStateAction<number[]>>;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
  setChecked: React.Dispatch<React.SetStateAction<IFilter>>;
  selectedOptions: ISelectedFilms[];
  yearMovie: IYearRange | 'empty';
  arrayCategoriesId: number[];
  valueSort: string;
  searchTerm: string;
  checked: IFilter;
  rating: number;
}

const TagContainer: FC<ITagContainerProps> = ({
  setArrayCategoriesId,
  setSelectedOptions,
  arrayCategoriesId,
  selectedOptions,
  setMovieRating,
  setInputValue,
  setYearMovie,
  setValueSort,
  searchTerm,
  setChecked,
  yearMovie,
  valueSort,
  checked,
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
    setInputValue('');
  };

  const deleteSort = () => {
    setValueSort('popularity');
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

  const deleteFilter = (key: string, value: boolean) => {
    setChecked((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => setlabel(t('movieList.rating')));
  return (
    <SearchContainer>
      {Number(rating) === 1 ? null : (
        <TagComponent
          cross={true}
          className="tag-search"
          label={`${label}${rating / 2}★`}
          onClick={deleteRating}
        />
      )}
      {valueSort === 'popularity' ? null : (
        <TagComponent
          onClick={deleteSort}
          cross={true}
          className="tag-search"
          label={t(`filterTag.${valueSort}`)}
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
      {checked.checkedAdult && (
        <TagComponent
          onClick={() => deleteFilter('checkedAdult', false)}
          cross={true}
          className="tag-search"
          label={t('filterTag.adult')}
        />
      )}
      {checked.checkedSearchInDesc && (
        <TagComponent
          onClick={() => deleteFilter('checkedSearchInDesc', false)}
          cross={true}
          className="tag-search"
          label={t('filterTag.description')}
        />
      )}
    </SearchContainer>
  );
};

export default TagContainer;
