import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { CastInfo, CastItem, CastList } from './Cast.styled';
import { DEFAULT_IMG } from 'constants/DEFAULT_IMG';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { cast, isLoading, error } = useFetchMovieCast();
  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {cast.length > 0 && (
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
      )}
    </>
  );
};

export default Cast;
