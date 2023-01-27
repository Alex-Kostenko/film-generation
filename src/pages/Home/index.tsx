import { useRouter } from 'next/router';
import { useState } from 'react';

import { Datepicker, Title, SerchPanel, Select, Btn } from './style';

const HomePage = () => {
  const router = useRouter();

  const [searchCriteria, setSearchCriteria] = useState({
    category: 'horor',
    filmByCompany: 'netflix',
  });

  const changeCriteria = (event: any) => {
    setSearchCriteria((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const redirect = () => {
    router.push(
      `/movieList?category=${searchCriteria.category}&filmByCompany=${searchCriteria.filmByCompany}`,
    );
  };

  return (
    <>
      <Title>Home</Title>
      <SerchPanel>
        <Select onChange={changeCriteria} name="category">
          <option value="horor">horor</option>
          <option value="comedy">comedy</option>
          <option value="adventure">adventure</option>
          <option value="fantasy">fantasy</option>
          <option value="detective">detective</option>
          <option value="drama">drama</option>
        </Select>
        <Select onChange={changeCriteria} name="filmByCompany">
          <option value="netflix">netflix</option>
          <option value="marvel">marvel</option>
          <option value="dc">dc</option>
        </Select>
        <Datepicker type="date" />
      </SerchPanel>
      <Btn label="Search" onClick={redirect} />
    </>
  );
};

export default HomePage;
