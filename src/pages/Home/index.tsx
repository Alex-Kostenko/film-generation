import { useState } from "react";
import { useRouter } from "next/router";

import style from "../../styles/Home.module.css";

const HomePage = () => {
  const router = useRouter();
  const [searchCriteria, setSearchCriteria] = useState({
    category: "horor",
    filmByCompany: "netflix",
  });

  const changeCriteria = (event: any) => {
    setSearchCriteria((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const redirect = () => {
    router.push(
      `/movieList?category=${searchCriteria.category}&filmByCompany=${searchCriteria.filmByCompany}`
    );
  };

  return (
    <>
      <h1 className={style.title}>Home</h1>
      <div className={style.serchPanel}>
        <select
          className={style.select}
          onChange={changeCriteria}
          name="category"
        >
          <option value="horor">horor</option>
          <option value="comedy">comedy</option>
          <option value="adventure">adventure</option>
          <option value="fantasy">fantasy</option>
          <option value="detective">detective</option>
          <option value="drama">drama</option>
        </select>
        <select
          className={style.select}
          onChange={changeCriteria}
          name="filmByCompany"
        >
          <option value="netflix">netflix</option>
          <option value="marvel">marvel</option>
          <option value="dc">dc</option>
        </select>
        <input className={style.datepicker} type="date" />
      </div>
      <button className={style.serchBtn} onClick={redirect}>
        Search
      </button>
    </>
  );
};

export default HomePage;
