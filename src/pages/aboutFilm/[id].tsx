import { FC } from "react";
import FilmInfo from "@/components/FilmInfo";

import { AboutFilms, Container, Video, Title } from "./style";

interface IDescription {
  voiceActing: string;
  director: string;
  starring: string;
  country: string;
  genre: string;
  name: string;
  year: string;
  time: string;
}

interface IVideo {
  poster: string;
  src: string;
}

type AboutFilmProps = {
  dataVideo: IVideo;
  description: IDescription;
};

const AboutFilm: FC<AboutFilmProps> = ({ dataVideo, description }) => {
  return (
    <>
      <Title>ABOUT FILM</Title>
      <Container>
        <Video controls poster={dataVideo.poster} src={dataVideo.src}></Video>
        <FilmInfo
          voiceActing={description.voiceActing}
          director={description.director}
          starring={description.starring}
          country={description.country}
          genre={description.genre}
          name={description.name}
          year={description.year}
          time={description.time}
        />
      </Container>
      <AboutFilms>
        The Green Mile is a 1999 American fantasy drama film written and
        directed by Frank Darabont and based on Stephen King's 1996 novel of the
        same name. It stars Tom Hanks as a death row prison guard during the
        Great Depression who witnesses supernatural events following the arrival
        of an enigmatic convict (Michael Clarke Duncan) at his facility. David
        Morse, Bonnie Hunt, Sam Rockwell, and James Cromwell appear in
        supporting roles. The film premiered on December 10, 1999, in the United
        States to positive reviews from critics, who praised Darabont's
        direction and writing, emotional weight, and performances particularly
        for Hanks and Duncan, although its length received criticism. Since its
        release, the film has gained a reputation as one of the most emotionally
        touching films of all time.[4] It was a commercial success, grossing
        $286 million from its $60 million budget, and was nominated for four
        Academy Awards: Best Picture, Best Supporting Actor for Duncan, Best
        Sound and Best Screenplay Based on Material Previously Produced or
        Published.
      </AboutFilms>
    </>
  );
};

export async function getServerSideProps() {
  const dataVideo = {
    src: "https://www.youtube.com/watch?v=Ki4haFrqSrw&ab_channel=RottenTomatoesClassicTrailers",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  };
  const description = {
    voiceActing: "dubbed",
    director: "Frank Darabont",
    starring: "Tom Hanks, Michael Clarke, David Morse",
    country: "USA",
    genre: "detective, drama, crime",
    name: "The Green Mile",
    year: "1999",
    time: "3 hours 9 minutes",
  };

  return { props: { dataVideo, description } };
}

export default AboutFilm;
