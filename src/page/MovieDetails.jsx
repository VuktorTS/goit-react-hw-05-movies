import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useFetchMovieById } from 'hooks/useFetchMovieById';

import { NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const { movieDetails, isLoading, error, backLocationHref } =
    useFetchMovieById();

  return (
    <>
      <NavLink to={backLocationHref.current} className="go-back-link">
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
