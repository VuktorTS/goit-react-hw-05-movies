import MuviesList from 'components/MuviesList/MuviesList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/themoviedbAPI';

const Home = () => {
  const [muviesTrend, setMuviesTrend] = useState([]);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      getTrending().then(trendingFilms => {
        setMuviesTrend(trendingFilms.results);
      });
    };
    fetchTrendingFilms();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MuviesList muviesTrend={muviesTrend} />
    </div>
  );
};

export default Home;
