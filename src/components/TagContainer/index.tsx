import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Genres } from '@/utils/genres';

import { SearchContainer, TagComponent } from './style';

interface ITagContainerProps {
  arrayCategoriesId: number[];
  searchTerm: string;
  rating: number;
}

const TagContainer: FC<ITagContainerProps> = ({
  arrayCategoriesId,
  searchTerm,
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
