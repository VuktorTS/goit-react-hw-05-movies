import MuviesList from 'components/MuviesList/MuviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { useFetchMovieByName } from 'hooks/useFetchMovieByName';

const Movies = () => {
  const {
    searchData,
    searchQuery,
    query,
    isLoading,
    error,
    onHandleSubmit,
    onHandleChange,
  } = useFetchMovieByName();
  return (
    <>
      <SearchForm
        query={searchQuery}
        submitForm={onHandleSubmit}
        handleChange={onHandleChange}
      />
      {isLoading && <Loader />}
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {searchData.length > 0 && (
        <MuviesList
          muviesList={searchData}
          title={`Everything found on request: ${query}`}
        />
      )}
    </>
  );
};
export default Movies;
