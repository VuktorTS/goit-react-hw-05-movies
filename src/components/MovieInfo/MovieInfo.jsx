import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieInfo = ({
  movieDetails: {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  },
}) => {
  return (
    <div className="container">
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`
          }
          alt={title}
          width={264}
          height={396}
        />
        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <div>
            <p>User Score: {vote_average.toFixed(1) * 10}%</p>
            <p>
              <span>Overview: </span>
              {overview}
            </p>
            <p>
              <span>Genres: </span>
              {genres?.map(({ name }) => name).join(', ')}
            </p>
          </div>
        </div>
      </div>
      <div className="additional">
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieInfo;
