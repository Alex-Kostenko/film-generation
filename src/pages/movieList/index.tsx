import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import queryMovie from '@/Services/queryMovies';
import ArrowBack from '@/components/ArrowBack';
import SearchPanelLine from '@/components/SearchPanelLine';
import {
  IYearRange,
  ISelectedFilms,
  ILocale,
  IMovieList,
  IMovieData,
} from '@/interfaces';
import {
  CardComponent,
  PanelWrapper,
  Paginate,
  Root,
} from '@/styles/movieListStyles/style';
import { Genres, notify, Sort } from '@/utils/genres';
import { Paths } from '@/utils/paths';

interface PageChangeEvent {
  selected: number;
}

const EmptyFilms = dynamic(() => import('@/components/NoMovies'), {
  ssr: false,
});

const PageManagementComponent = dynamic(
  () => import('@/components/PageManagement'),
  {
    ssr: false,
  },
);

const TagContainer = dynamic(() => import('@/components/TagContainer'), {
  ssr: false,
});

const MovieList: FC<IMovieList> = ({ imgLink }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const {
    categoriesId,
    rating,
    search,
    yearRange,
    checkedAdult,
    checkedSearchInDesc,
    curPage,
    sorting,
    ascDescc,
    pageSize,
  }: any = router.query;

  const [checked, setChecked] = useState({
    checkedAdult: checkedAdult ? !(checkedAdult === 'false') : false,
    checkedSearchInDesc: checkedSearchInDesc
      ? !(checkedSearchInDesc === 'false')
      : false,
  });

  const [movieRating, setMovieRating] = useState(Number(rating));

  const [arrayCategoriesId, setArrayCategoriesId] = useState(
    categoriesId ? categoriesId.split(',').map((id: string) => Number(id)) : [],
  );

  // eslint-disable-next-line
  const [styless, setStyless] = useState("a[aria-label='Page -1']");

  const [content, setContent] = useState<IMovieData[]>([]);

  const [searchTerm, setSearchTerm] = useState(search ?? '');

  const [yearMovie, setYearMovie] = useState<IYearRange | 'empty'>(
    yearRange === 'empty'
      ? 'empty'
      : {
          startYear: Number(yearRange?.split(',')[0]),
          endYear: Number(yearRange?.split(',')[1]),
        },
  );

  const [valueSort, setValueSort] = useState(sorting ?? 'popularity');
  const [ascDesc, setAscDesc] = useState(ascDescc ?? Sort.desc);
  const [selectedOptions, setSelectedOptions] = useState<ISelectedFilms[]>([]);
  const [inputValue, setInputValue] = useState<string>(searchTerm);

  const [query, setQuery] = useState({
    currentPage: curPage ? Number(curPage) : 0,
    count: 40,
    arrowUpload: false,
    isLoading: false,
    pageSize: pageSize ? pageSize : 5,
  });

  const handleScrollTotop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    router.query.categoriesId &&
      setSelectedOptions(
        (router.query.categoriesId as string)
          .split(',')
          .map((item) => ({ value: item })),
      );
  }, [router.query.categoriesId]);

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (content === undefined) {
      notify('УПС ХАЛЕПКА');
    }
  }, [content]);

  useEffect(() => {
    (async () => {
      setQuery({ ...query, isLoading: true });

      try {
        const allFilters = await queryMovie.pagination(
          query.pageSize,
          query.currentPage + 1,
          searchTerm,
          {
            genres_ids: arrayCategoriesId
              ? arrayCategoriesId.map((item: string) => Number(item))
              : [],
            voteAvarageFrom: movieRating,
            orderBy: valueSort,
            dir: ascDesc,
            releaseDateFrom:
              typeof yearMovie === 'object' ? yearMovie.startYear : 1990,
            releaseDateTo:
              typeof yearMovie === 'object'
                ? yearMovie.endYear
                : new Date().getFullYear(),
            includeAdult: checked.checkedAdult,
          },
        );

        if (query.arrowUpload) {
          setContent(content.concat(allFilters.data.results));
        } else {
          setContent(allFilters.data.results);
          handleScrollTotop();
        }
        setQuery({
          ...query,
          count: allFilters.data.total_pages,
          isLoading: false,
        });
      } catch (error: any) {
        notify(error.response.data.message[0]);
      }
    })();
  }, [
    query.currentPage,
    query.pageSize,
    movieRating,
    arrayCategoriesId,
    searchTerm,
    valueSort,
    ascDesc,
    yearMovie,
    checked,
  ]);

  useEffect(() => {
    if (query.arrowUpload) {
      // eslint-disable-next-line
      if (styless === `a[aria-label='Page -1']`) {
        setStyless(`a[aria-label='Page ${query.currentPage}']`);
      } else {
        setStyless(styless + `,a[aria-label='Page ${query.currentPage}']`);
      }
    } else {
      // eslint-disable-next-line
      setStyless(`a[aria-label='Page -1']`);
    }
  }, [query.currentPage]);

  const handlePageClick = async (event: PageChangeEvent) => {
    setQuery({ ...query, arrowUpload: false, currentPage: event.selected });
  };

  return (
    <>
      <Head>
        <title>Movie picker</title>
      </Head>
      <Root styleLabel={styless}>
        <ArrowBack onClick={() => router.push(`${Paths.home}`)} />
        <TagContainer
          setInputValue={setInputValue}
          checked={checked}
          setChecked={setChecked}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          valueSort={valueSort}
          yearMovie={yearMovie}
          rating={rating}
          searchTerm={searchTerm}
          arrayCategoriesId={arrayCategoriesId}
          setYearMovie={setYearMovie}
          setMovieRating={setMovieRating}
          setValueSort={setValueSort}
          setArrayCategoriesId={setArrayCategoriesId}
        />
        <PanelWrapper>
          <SearchPanelLine
            query={query}
            setQuery={setQuery}
            curPage={query.currentPage}
            setInputValue={setInputValue}
            inputValue={inputValue}
            valueSort={valueSort}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            ascDesc={ascDesc}
            checked={checked}
            setChecked={setChecked}
            setAscDesc={setAscDesc}
            setValueSort={setValueSort}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setMovieRating={setMovieRating}
            movieRating={movieRating}
            arrayGenres={arrayCategoriesId}
            arrayCategoriesId={arrayCategoriesId}
            setArrayCategoriesId={setArrayCategoriesId}
            yearMovie={yearMovie}
            setYearMovie={setYearMovie}
          />
        </PanelWrapper>
        {content.map((movie: IMovieData) => (
          <div key={movie.id}>
            <CardComponent
              img={
                movie.poster_path ? `${imgLink}${movie.poster_path}` : undefined
              }
              title={movie.original_title ?? movie.title}
              subtitle={
                movie.original_title === movie.title ||
                movie.original_title === null
                  ? ''
                  : movie.title
              }
              release={t('movieList.release')}
              date={movie.release_date}
              description={movie.overview}
              movieId={movie.id}
              labels={movie.genre_ids.map((item: number) =>
                t(`genres.${Genres[item]}`),
              )}
            />
          </div>
        ))}
        {content.length ? (
          <>
            <PageManagementComponent query={query} setQuery={setQuery} />
            <Paginate
              breakLabel="..."
              nextLabel={'>'}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={query.count}
              previousLabel="<"
              className="paginateClass"
              activeClassName="active"
              containerClassName="container"
              forcePage={query.currentPage}
            />
          </>
        ) : (
          <EmptyFilms />
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Root>
    </>
  );
};

export default MovieList;

export const getServerSideProps = async ({ locale }: ILocale) => {
  return {
    props: {
      imgLink: process.env.MOVIE_PICTURE,
      ...(await serverSideTranslations(locale)),
    },
  };
};
