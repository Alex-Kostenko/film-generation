import { Button, Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';

import { ISelectedFilms } from '@/interfaces';

import Stars from '../Stars';

import {
  DatePickerComponent,
  CriteriasContainer,
  SearchContainer,
  Select,
} from './style';

interface IHomePage {
  propsGenres: ISelectedFilms[];
}

const SearchPanel: FC<IHomePage> = ({ propsGenres }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [searchGenre, setSearchGenre] = useState<ISelectedFilms[]>([]);
  const [rating, setRating] = useState(0.5);
  const [genres, setGenres] = useState<ISelectedFilms[]>([]);

  useEffect(() => {
    propsGenres.forEach(
      (option: ISelectedFilms) => (
        (option.value = option.id),
        (option.label = option.name),
        delete option.name
      ),
    );

    setGenres(propsGenres);
  }, []);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setSearchGenre(selectedFilms);
  };

  const redirect = () => {
    router.push(
      `/movieList?categories=${searchGenre.map(
        (element: ISelectedFilms) => element.label,
      )}&categoriesId=${searchGenre.map(
        (element: ISelectedFilms) => element.id,
      )}&rating=${rating * 2}`,
    );
  };
  return (
    <>
      <CriteriasContainer>
        <Select
          className="selectCategory"
          placeholder={t('main.genre')}
          onChange={(selectedFilms: ISelectedFilms[]) =>
            changeGenre(selectedFilms)
          }
          options={genres}
        />
        <DatePickerComponent className="datePicker" />
        <Stars setRating={setRating} />
      </CriteriasContainer>
      <SearchContainer>
        <Input label={t('main.search')} />
        <Button label={t('main.search')} onClick={redirect} />
      </SearchContainer>
    </>
  );
};

export default SearchPanel;
