import { SelectComponent } from 'alex-unicode';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
import { IMovieListProps, IName } from '@/interfaces';
import {
  ArrowUploadWrapper,
  SearchCriteria,
  CardComponent,
  TagComponent,
  Text,
  Root,
} from '@/styles/movieListStyles/style';
import { optionSize } from '@/utils/constants';

import Reload from '../../../public/reload.svg';

const MovieList: FC<IMovieListProps> = () => {
  const router = useRouter();
  const { categories }: any = router.query;
  const arrayCategories = categories.split(',');

  const handleScrollTotop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  const reloadRef: any = useRef(null);

  // eslint-disable-next-line
  const [styless, setStyless] = useState(`a[aria-label='Page -1']`);

  const [content, setContent] = useState([]);

  const [query, setQuery] = useState({
    currentPage: 0,
    count: 40,
    arrowUpload: false,
    isLoading: false,
    pageSize: 4,
  });

  useEffect(() => {
    (async () => {
      setQuery({ ...query, isLoading: true });
      const allFilters = await queryMovie.pagination(
        query.pageSize,
        query.currentPage + 1,
        {
          filters: [],
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
    })();
  }, [query.currentPage, query.pageSize]);

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

  const handlePageClick = async (event: any) => {
    setQuery({ ...query, arrowUpload: false, currentPage: event.selected });
  };

  return (
    <Root colorStyle={styless}>
      <BackBtn />
      <div>
        <SearchCriteria>
          {arrayCategories.map((movie: string) => (
            <TagComponent className="tag-large" label={movie} />
          ))}
        </SearchCriteria>
      </div>

      {content.map((movie: any) => (
        <div key={movie.id}>
          <CardComponent
            img={
              movie.poster_path &&
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            }
            title={movie.original_title}
            subtitle={movie.title}
            labels={movie.lables}
            date={movie.release_date}
            description={movie.overview}
            action={() => redirect(movie.id)}
          />
        </div>
      ))}
      <ArrowUploadWrapper>
        <div ref={reloadRef}>
          <Reload
            className={classNames('reload', {
              loading: query.isLoading,
            })}
            aria-label="Reload"
            onClick={() => {
              setQuery({
                ...query,
                currentPage: query.currentPage + 1,
                arrowUpload: true,
              });
            }}
          />
        </div>
        <Text>Show More</Text>
        <SelectComponent
          className="selectCategory"
          placeholder={'PageSize'}
          onChange={(name: IName) => {
            setQuery({ ...query, pageSize: Number(name.label) });
          }}
          options={optionSize}
        />
      </ArrowUploadWrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={query.count}
        previousLabel="<"
        className="paginateClass"
        activeClassName="active"
        containerClassName="container"
        forcePage={query.currentPage}
      />
    </Root>
  );
};

export default MovieList;
