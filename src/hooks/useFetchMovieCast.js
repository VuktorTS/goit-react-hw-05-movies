import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/themoviedbAPI';

export const useFetchMovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastInfo = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCastInfo();
  }, [movieId]);

  return { cast, isLoading, error };
};
