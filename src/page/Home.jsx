import { Loader } from 'components/Loader/Loader';
import MuviesList from 'components/MuviesList/MuviesList';
import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';

const Home = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();

  return (
    <>
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {isLoading && <Loader />}
      {movies.length > 0 && (
        <MuviesList muviesList={movies} title={'Trending today'} />
      )}
    </>
  );
};

export default Home;
