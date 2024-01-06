import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/themoviedbAPI';

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
    <>
      <ul>
        {cast.map(({ cast_id, name, profile_path, character }) => {
          return (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`
                }
                alt={name}
                width={264}
                height={396}
              />
              <h3>{name}</h3>
              <p>
                <span>Character: </span>
                {character}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
