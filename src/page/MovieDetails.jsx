import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/themoviedbAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const BackLocationHref = useRef(location.state?.from ?? '/');

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

  return (
    <>
      <NavLink to={BackLocationHref.current} className="go-back-link">
        ←Go Back
      </NavLink>
      {isLoading && <Loader />}
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
    </>
  );
};

export default MovieDetails;
