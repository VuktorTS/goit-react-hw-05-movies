import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByName } from 'services/themoviedbAPI';

import MuviesList from 'components/MuviesList/MuviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (!query) return;
        setIsLoading(true);
        setError(null);
        const { results } = await getMovieByName(query);
        setSearchData(results);
      } catch (error) {
        console.log('error: ', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
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
      {isLoading && <Loader />}
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {searchData.length > 0 && (
        <MuviesList
          muviesList={searchData}
          title={`Everything found on request: ${query}`}
        />
      )}
    </>
  );
};
// title = {
//   searchData.length !== 0
//             ? `Everything found on request: ${query}`
//             : `Sorry, but nothing was found for your request.`
//         }
export default Movies;
