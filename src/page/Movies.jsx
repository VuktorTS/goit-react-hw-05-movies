import MuviesList from 'components/MuviesList/MuviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/themoviedbAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));
  const [searchData, setSearchData] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (!query) return;
        const { results } = await getMovieByName(query);
        setSearchData(results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
  }, [query]);

  const submitForm = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;
    setSearchParams({ query: searchQuery });
  };

  const handleChange = ({ target }) => {
    setSearchQuery(target.value.toLowerCase());
  };
  return (
    <>
      <SearchForm
        query={searchQuery}
        submitForm={submitForm}
        handleChange={handleChange}
      />
      <MuviesList
        muviesList={searchData}
        title={
          searchData.length !== 0
            ? `Everything found on request: ${query}`
            : `Sorry, but nothing was found for your request.`
        }
      />
    </>
  );
};

export default Movies;
