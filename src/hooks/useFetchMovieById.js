import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/themoviedbAPI';

export const useFetchMovieById = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLocationHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMoveisDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const moviesInfo = await getMovieDetails(movieId);

        setMovieDetails(moviesInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoveisDetails();
  }, [movieId, setMovieDetails]);

  return { movieDetails, isLoading, error, backLocationHref };
};
