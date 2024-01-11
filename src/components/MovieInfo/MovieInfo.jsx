import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  AdditionalContainer,
  AdditionalLink,
  AdditionlList,
  AdditionlTitle,
  InfoAboutMovie,
  MovieInfoContainer,
} from './MovieInfo.styled';
import { DEFAULT_IMG } from 'constants/DEFAULT_IMG';

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
    <>
      <MovieInfoContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : DEFAULT_IMG
          }
          alt={title}
          width={264}
          height={396}
        />
        <InfoAboutMovie>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>
            <span>User Score: </span>
            {vote_average.toFixed(1) * 10}%
          </p>
          <p>
            <span>Overview: </span>
            {overview}
          </p>
          <p>
            <span>Genres: </span>
            {genres?.map(({ name }) => name).join(', ')}
          </p>
        </InfoAboutMovie>
      </MovieInfoContainer>
      <AdditionalContainer>
        <AdditionlTitle>Additional information</AdditionlTitle>
        <AdditionlList>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </AdditionlList>
      </AdditionalContainer>
      <Suspense fallback={<div>Loading...1111111111111111111111111111111111111111111111111111111111111111</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
