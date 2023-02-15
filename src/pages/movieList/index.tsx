import { useRouter } from 'next/router';
import { FC } from 'react';

import BackBtn from '@/components/BackBtn';
import { IMovieListProps, IMovie } from '@/interfaces';

import { MOVIES } from './__mocks__/movies';
import { SearchCriteria, CardComponent, TagComponent, Line } from './style';

const MovieList: FC<IMovieListProps> = ({ MOVIES }) => {
  const router = useRouter();
  const { category, filmByCompany } = router.query;

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  return (
    <>
      <BackBtn />
      <div>
        <SearchCriteria>
          <TagComponent className="tag-large" label={category} />
          <TagComponent className="tag-large" label={filmByCompany} />
        </SearchCriteria>
      </div>
      {MOVIES.map((movie: IMovie) => (
        <div key={movie.id}>
          <CardComponent
            img={movie.img}
            title={movie.engTitle}
            subtitle={movie.rusTitle}
            labels={movie.lables}
            date={movie.date}
            description={movie.description}
            action={() => redirect(movie.id)}
          />
          {MOVIES.length === movie.id ? null : <Line />}
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  return { props: { MOVIES } };
}

export default MovieList;
