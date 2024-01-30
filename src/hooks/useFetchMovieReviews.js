import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedbAPI';

export const useFetchMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewsInfo = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviewsInfo();
  }, [movieId]);

  return { reviews, isLoading, error };
};
