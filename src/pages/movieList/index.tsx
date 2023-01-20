import { useRouter } from "next/router";
import { FC } from "react";

import style from "../../styles/Home.module.css";

interface IMovie {
  id: number;
  title: string;
}

interface IMovieListPageProps {
  MOVIES: IMovie[];
}

const MovieListPage: FC<IMovieListPageProps> = ({ MOVIES }) => {
  const router = useRouter();
  const { category, filmByCompany } = router.query;

  const redirect = (id: number) => {
    router.push(`/AboutFilm/${id}`);
  };
  return (
    <>
      <h1 className={style.title}>MOVIE LIST PAGE</h1>
      <div>
        <p className={style.searchCriteria}>
          You are looking for a movie according to the given criteria:
          <span className={style.span}>{category}</span>,
          <span className={style.span}>{filmByCompany}</span>
        </p>
      </div>

      <ul className={style.ul}>
        {MOVIES.map((movie: IMovie) => (
          <li
            className={style.li}
            onClick={() => redirect(movie.id)}
            key={movie.id}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const MOVIES = [
    { title: "The Green Mile", id: 1 },
    { title: "Intouchables", id: 2 },
    { title: "Hachiko: A Dog's Story", id: 3 },
    { title: "Avatar", id: 4 },
    { title: "Forrest Gump", id: 5 },
  ];

  return { props: { MOVIES } };
}

export default MovieListPage;
