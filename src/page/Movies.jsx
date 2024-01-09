import MuviesList from 'components/MuviesList/MuviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/themoviedbAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);

  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    const searchMovies = async () => {
      try {
        const { results } = await getMovieByName(query);
        setSearchData(results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
  }, [query]);

  const handleChange = ({ target }) => {
    const query = target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  return (
    <>
      <SearchForm query={query} handleChange={handleChange} />
      <MuviesList muviesList={searchData} title={'lorem'} />
    </>
  );
};

export default Movies;
