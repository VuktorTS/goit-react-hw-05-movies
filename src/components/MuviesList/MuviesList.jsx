import React from 'react';
import { useLocation } from 'react-router-dom';

import { DEFAULT_IMG } from 'constants/DEFAULT_IMG';

import { MovieLink, MoviesList, Title } from './MuviesList.styled';

const MuviesList = ({ muviesList, title }) => {
  const location = useLocation();

  return (
    <>
      <Title>{title}</Title>
      <MoviesList>
        {muviesList.map(({ id, original_title, poster_path, title }) => {
          return (
            <li key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : DEFAULT_IMG
                  }
                  alt={title}
                  width={266}
                  height={398}
                />
                <h2>{original_title}</h2>
              </MovieLink>
            </li>
          );
        })}
      </MoviesList>
    </>
  );
};

export default MuviesList;
// adult: false;
// backdrop_path: '/96S2aGGh6I7og1oNrAiRHxGz0PH.jpg';
// genre_ids: (3)[(35, 18, 10749)];
// id: 1036619;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Good Grief';
// overview: "When his husband unexpectedly dies, Marc's world shatters, sending him and his two best friends on a soul-searching trip to Paris that reveals some hard truths they each needed to face.";
// popularity: 27.922;
// poster_path: '/wJFHUglmh7xlY7g9Ql85QAJBZ6n.jpg';
// release_date: '2023-12-29';
// title: 'Good Grief';
// video: false;
// vote_average: 5.6;
// vote_count: 7;
