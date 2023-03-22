import { Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Dropdown from 'rc-dropdown';
import { Item as MenuItem } from 'rc-menu';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import Switch from 'react-switch';
import 'rc-dropdown/assets/index.css';

import queryMovie from '@/Services/queryMovies';
import {
  IFilter,
  IName,
  ISelectedFilms,
  IYearRange,
  LangGenre,
} from '@/interfaces';
import { PALETTE } from '@/palette';
import { useDebounce } from '@/utils/hooks/useDebounce';

import Option from '../Checkbox';
import Stars from '../Stars';
import YearRangePickerComponent from '../YearRangeComponent';

import {
  WrapperInArrowInFilter,
  CriteriasContainer,
  WrapperFilter,
  LeftArrow,
  TopArrow,
  Select,
  Root,
  MenuFilter,
} from './style';

interface ISearchPanel {
  setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectedFilms[]>>;
  setYearMovie: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  setArrayCategoriesId: React.Dispatch<
    React.SetStateAction<(string | undefined)[]>
  >;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
  setChecked: React.Dispatch<React.SetStateAction<IFilter>>;
  setAscDesc: React.Dispatch<React.SetStateAction<string>>;
  selectedOptions: ISelectedFilms[];
  yearMovie: IYearRange | 'empty';
  arrayCategoriesId: string[];
  arrayGenres: string[];
  movieRating: number;
  searchTerm: string;
  valueSort: string;
  checked: IFilter;
  ascDesc: string;
  curPage: number;
}

const SearchPanel: FC<ISearchPanel> = ({
  setArrayCategoriesId,
  setSelectedOptions,
  arrayCategoriesId,
  selectedOptions,
  setMovieRating,
  setSearchTerm,
  setYearMovie,
  setValueSort,
  movieRating,
  searchTerm,
  setAscDesc,
  setChecked,
  yearMovie,
  valueSort,
  ascDesc,
  checked,
  curPage,
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [resultGenres, setResultGenres] = useState<IName[]>([]);
  const [genres, setGenres] = useState<LangGenre[]>([]);
  const [inputValue, setInputValue] = useState<string>(searchTerm);

  const filter = [
    { value: 'popularity', label: t('filter.popularity') },
    { value: 'release_date', label: t('filter.release_date') },
    { value: 'vote_average', label: t('filter.vote_average') },
    { value: 'title', label: t('filter.title') },
  ];

  useEffect(() => {
    if (genres.length === 0) {
      (async () => {
        const genres = await queryMovie.getGenres();

        setGenres(genres);
      })();
    }

    const toUpperCase = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    let genreLanguages: string;

    switch (router.locale) {
      case 'ru':
        genreLanguages = 'name';
        break;
      case 'ua':
        genreLanguages = 'name_ukr';
        break;
      default:
        genreLanguages = 'name_eng';
    }

    setResultGenres(
      genres.map((option: LangGenre) => {
        return {
          value: String(option.id),
          label: toUpperCase(
            String(option[genreLanguages as keyof typeof option]),
          ),
        };
      }),
    );
  }, [genres, router.locale]);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setArrayCategoriesId(selectedFilms.map((item) => item.value));
    setSelectedOptions(selectedFilms);
  };

  const debouncedValue = useDebounce<string>(inputValue, 2000);

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    function handlePushWithoutRender() {
      router.push(
        {
          pathname: '/movieList',
          query: {
            rating: `${movieRating}`,
            search: `${searchTerm}`,
            categoriesId: `${arrayCategoriesId && arrayCategoriesId.join(',')}`,
            yearRange:
              yearMovie === 'empty'
                ? 'empty'
                : `${typeof yearMovie === 'object' && yearMovie.startYear},${
                    typeof yearMovie === 'object' && yearMovie.endYear
                  }`,
            checkedAdult: checked.checkedAdult,
            checkedSearchInDesc: checked.checkedSearchInDesc,
            sorting: `${valueSort}`,
            curPage: curPage,
          },
        },
        undefined,
        { shallow: true },
      );
    }
    handlePushWithoutRender();
  }, [
    movieRating,
    searchTerm,
    arrayCategoriesId,
    yearMovie,
    checked,
    valueSort,
    curPage,
  ]);

  const handleChange = (check: boolean, valueIsCheked: string) => {
    setChecked({ ...checked, [valueIsCheked]: check });
  };

  const menu = (
    <MenuFilter>
      <MenuItem key="1">
        <label className="labelFilter">
          <p className="textFilter">{t('filter.adult')}</p>
          <Switch
            offColor="#1f1f1f"
            onColor="#f33f3f"
            uncheckedIcon={false}
            checkedIcon={false}
            height={22}
            width={33}
            activeBoxShadow="0 0 2px 3px #f33f3f"
            onChange={(check) => handleChange(check, 'checkedAdult')}
            checked={checked.checkedAdult}
          />
        </label>
      </MenuItem>
      <MenuItem key="2">
        <label className="labelFilter">
          <p className="textFilter">{t('filter.description')}</p>
          <Switch
            offColor="#1f1f1f"
            onColor="#f33f3f"
            uncheckedIcon={false}
            checkedIcon={false}
            height={22}
            width={33}
            activeBoxShadow="0 0 2px 3px #f33f3f"
            onChange={(check) => handleChange(check, 'checkedSearchInDesc')}
            checked={checked.checkedSearchInDesc}
          />
        </label>
      </MenuItem>
      <MenuItem key="3">
        {
          <Stars
            style={{ margin: '35px', color: PALETTE.dark.darkBlack }}
            rating={t('main.rating')}
            movieRating={movieRating}
            setMovieRating={setMovieRating}
          />
        }
      </MenuItem>
    </MenuFilter>
  );

  return (
    <Root>
      <CriteriasContainer>
        <Select
          className="selectCategory"
          placeholder={t('main.genre')}
          options={resultGenres}
          multi={true}
          closeMenu={false}
          checkbox={{ Option }}
          onChange={(selectedFilms: ISelectedFilms[]) =>
            changeGenre(selectedFilms)
          }
          value={selectedOptions}
        />
        <YearRangePickerComponent
          yearMovie={yearMovie}
          setYearMovie={setYearMovie}
        />
        <WrapperFilter>
          <WrapperInArrowInFilter>
            <TopArrow onClick={() => setAscDesc('desc')}>
              {ascDesc === 'desc' ? <>&#9650;</> : <>&#9651;</>}
            </TopArrow>
            <LeftArrow onClick={() => setAscDesc('asc')}>
              {ascDesc === 'desc' ? <>&#9661;</> : <>&#9660;</>}
            </LeftArrow>
          </WrapperInArrowInFilter>
          <Select
            className="selectFilter"
            placeholder={t('main.sort')}
            onChange={(name: IName) => setValueSort(name.value)}
            options={filter}
            multi={false}
            closeMenu={true}
            hideSelected={true}
          />
        </WrapperFilter>
        <div className="filter">
          <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
            <button>{t('main.filter')}</button>
          </Dropdown>
        </div>
        <Input
          label={t('main.search')}
          value={inputValue}
          onChange={changeSearchValue}
        />
      </CriteriasContainer>
    </Root>
  );
};

export default SearchPanel;
