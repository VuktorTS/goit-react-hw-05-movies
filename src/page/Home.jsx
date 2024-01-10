import MuviesList from 'components/MuviesList/MuviesList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/themoviedbAPI';

const Home = () => {
  const [muviesList, setMuviesList] = useState([]);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      getTrending().then(trendingFilms => {
        setMuviesList(trendingFilms.results);
      });
    };
    fetchTrendingFilms();
  }, []);
  return (
    <>
      <MuviesList muviesList={muviesList} title={'Trending today'} />
    </>
  );
};

export default Home;