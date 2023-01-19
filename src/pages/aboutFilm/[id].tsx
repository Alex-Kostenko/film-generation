import style from "../../styles/Home.module.css";

const AboutFilmPage = () => {
  return (
    <>
      <h1 className={style.title}>ABOUT FILM PAGE</h1>
      <div className={style.container}>
        <video
          width="650"
          height="400"
          controls
          poster="https://avatars.mds.yandex.net/get-ott/224348/2a00000169e39ef77f588ccdfe574dae8227/1344x756"
          src="https://www.youtube.com/watch?v=ZIz_OL7d-H8&ab_channel=%D0%9A%D0%B8%D0%BD%D0%BE%D0%A2%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80%D1%8B"
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

export default AboutFilmPage;
