import { Loader } from 'components/Loader/Loader';
import MuviesList from 'components/MuviesList/MuviesList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/themoviedbAPI';

const Home = () => {
  const [muviesList, setMuviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await getTrending();
        setMuviesList(results);
      } catch (error) {
        console.log('error: ', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <>
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {isLoading && <Loader />}
      {muviesList.length > 0 && (
        <MuviesList muviesList={muviesList} title={'Trending today'} />
      )}
    </>
  );
};

export default Home;
