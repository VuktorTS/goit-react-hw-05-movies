import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/themoviedbAPI';

export const useFetchMovieByName = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
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

  const onHandleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;
    setSearchParams({ query: searchQuery });
  };

  const onHandleChange = ({ target }) => {
    setSearchQuery(target.value.toLowerCase());
  };
  return {
    searchData,
    searchQuery,
    query,
    isLoading,
    error,
    onHandleSubmit,
    onHandleChange,
  };
};
