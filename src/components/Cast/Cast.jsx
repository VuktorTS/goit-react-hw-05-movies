import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastInfo, CastItem, CastList } from './Cast.styled';

import { getMovieCredits } from 'services/themoviedbAPI';
import { DEFAULT_IMG } from 'constants/DEFAULT_IMG';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastInfo = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCastInfo();
  }, [movieId]);

  return (
    <CastList>
      {cast.map(({ cast_id, name, profile_path, character }) => {
        return (
          <CastItem key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : DEFAULT_IMG
              }
              alt={name}
              width={208}
              height={300}
            />
            <CastInfo>
              <h3>{name}</h3>
              <p>
                <span>Character: </span>
                {character}
              </p>
            </CastInfo>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
