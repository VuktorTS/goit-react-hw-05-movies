import axios from 'axios';
import TOKEN_AUTH from './TOKEN_AUTH';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = TOKEN_AUTH;

const getTrending = async () => {
  const response = await axios.get('trending/movie/day');
  return response.data;
};

const searchMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`);
  return response.data;
};

const getMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
};

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
