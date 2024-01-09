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
    <div className="container">
      <h1>Trending today</h1>
      <MuviesList muviesList={muviesList} />
    </div>
  );
};

export default Home;
