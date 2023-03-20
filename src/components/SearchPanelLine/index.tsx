import { Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Dropdown from 'rc-dropdown';
import { Item as MenuItem } from 'rc-menu';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import Switch from 'react-switch';
import 'rc-dropdown/assets/index.css';

import queryMovie from '@/Services/queryMovies';
import { IName, ISelectedFilms, IYearRange, LangGenre } from '@/interfaces';
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
  setArrayCategoriesId: React.Dispatch<React.SetStateAction<any>>;
  setValueFilter: React.Dispatch<React.SetStateAction<string>>;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setAscDesc: React.Dispatch<React.SetStateAction<string>>;
  arrayCategoriesId: string[];
  arrayGenres: string[];
  movieRating: number;
  searchTerm: string;
  ascDesc: string;
  yearMovie: IYearRange | 'empty';
  setYearMovie: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  checked: any;
  setChecked: any;
}

const SearchPanel: FC<ISearchPanel> = ({
  setArrayCategoriesId,
  arrayCategoriesId,
  setMovieRating,
  setValueFilter,
  setSearchTerm,
  movieRating,
  searchTerm,
  setAscDesc,
  ascDesc,
  yearMovie,
  setYearMovie,
  checked,
  setChecked,
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [resultGenres, setResultGenres] = useState<IName[]>([]);
  const [genres, setGenres] = useState<LangGenre[]>([]);

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
  };
  const changeSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  const debounce = useDebounce(changeSearchTerm);

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
          },
        },
        undefined,
        { shallow: true },
      );
    }
    handlePushWithoutRender();
  }, [movieRating, searchTerm, arrayCategoriesId, yearMovie, checked]);

  const handleChange = (check: boolean, valueIsCheked: string) => {
    setChecked({ ...checked, [valueIsCheked]: check });
  };

  const menu = (
    <MenuFilter>
      <MenuItem key="1">
        <label className="labelFilter">
          <p className="textFilter">Adult</p>
          <Switch
            onChange={(check) => handleChange(check, 'checkedAdult')}
            checked={checked.checkedAdult}
          />
        </label>
      </MenuItem>
      <MenuItem key="2">
        <label className="labelFilter">
          <p className="textFilter"> Search in Desc</p>
          <Switch
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
          defaultValue={
            router.query.categoriesId &&
            (router.query.categoriesId as string)
              .split(',')
              .map((item: any) => {
                return { value: item };
              })
          }
        />
        <YearRangePickerComponent
          yearMovie={yearMovie}
          setYearMovie={setYearMovie}
        />
        <Input
          label={t('main.search')}
          value={searchTerm}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            debounce(event.target.value);
            setSearchTerm(event.target.value);
          }}
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
            onChange={(name: IName) => setValueFilter(name.value)}
            options={filter}
            multi={false}
            closeMenu={true}
            hideSelected={true}
          />
        </WrapperFilter>
        {/* <Stars
          rating={t('main.rating')}
          movieRating={movieRating}
          setMovieRating={setMovieRating}
        /> */}

        <div className="filter">
          <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
            <button style={{ width: 100 }}>{t('main.filter')}</button>
          </Dropdown>
        </div>
      </CriteriasContainer>
    </Root>
  );
};

export default SearchPanel;
