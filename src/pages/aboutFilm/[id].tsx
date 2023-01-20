import { FC } from "react";

import style from "../../styles/Home.module.css";

interface IVideo {
  poster: string;
  src: string;
  width: string;
  height: string;
}

type AboutFilmPageProps = {
  dataVideo: IVideo;
};

const AboutFilmPage: FC<AboutFilmPageProps> = ({ dataVideo }) => {
  return (
    <>
      <h1 className={style.title}>ABOUT FILM PAGE</h1>
      <div className={style.container}>
        <video
          width={dataVideo.width}
          height={dataVideo.height}
          controls
          poster={dataVideo.poster}
          src={dataVideo.src}
        ></video>
        <p className={style.aboutFilms}>
          The Green Mile is a 1999 American fantasy drama film written and
          directed by Frank Darabont and based on Stephen King's 1996 novel of
          the same name. It stars Tom Hanks as a death row prison guard during
          the Great Depression who witnesses supernatural events following the
          arrival of an enigmatic convict (Michael Clarke Duncan) at his
          facility. David Morse, Bonnie Hunt, Sam Rockwell, and James Cromwell
          appear in supporting roles. The film premiered on December 10, 1999,
          in the United States to positive reviews from critics, who praised
          Darabont's direction and writing, emotional weight, and performances
          particularly for Hanks and Duncan, although its length received
          criticism. Since its release, the film has gained a reputation as one
          of the most emotionally touching films of all time.[4] It was a
          commercial success, grossing $286 million from its $60 million budget,
          and was nominated for four Academy Awards: Best Picture, Best
          Supporting Actor for Duncan, Best Sound and Best Screenplay Based on
          Material Previously Produced or Published.
        </p>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const dataVideo = {
    width: "650",
    height: "400",
    src: "https://www.youtube.com/watch?v=Ki4haFrqSrw&ab_channel=RottenTomatoesClassicTrailers",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  };

  return { props: { dataVideo } };
}

export default AboutFilmPage;
