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

import Reload from '../../../public/reload.svg';
import { SelectComponent } from 'alex-unicode';
import { optionSize } from '@/utils/constants';

const MovieList: FC<IMovieListProps> = () => {
  const router = useRouter();
  const { category, filmByCompany } = router.query;

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

  // const [currentPage, setCurrentPage] = useState(0);
  // const [count, setCount] = useState(40);
  // const [content, setContent] = useState([]);
  // const [arrowUpload, setArrowUpload] = useState(false);
  // const [isLoading, setIsloading] = useState(false);
  // const [pageSize, setPageSize] = useState<number>(4);

  const [query, setQuery] = useState({
    currentPage: 0,
    count: 40,
    content: [],
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
        setQuery({
          ...query,
          content: query.content.concat(allFilters.data.results),
        });
      } else {
        setQuery({
          ...query,
          content: allFilters.data.results,
        });
      }

      // setCount(allFilters.data.total_pages);
      setQuery({ ...query, count: allFilters.data.total_pages });
      setQuery({ ...query, isLoading: false });

      handleScrollTotop();
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
    setQuery({ ...query, arrowUpload: false });
    setQuery({ ...query, currentPage: event.selected });
  };

  return (
    <Root colorStyle={styless}>
      <BackBtn />
      <div>
        <SearchCriteria>
          <TagComponent className="tag-large" label={category} />
          <TagComponent className="tag-large" label={filmByCompany} />
        </SearchCriteria>
      </div>

      {query.content.map((movie: any) => (
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
              setQuery({ ...query, currentPage: query.currentPage + 1 }),
                setQuery({ ...query, arrowUpload: true });
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
