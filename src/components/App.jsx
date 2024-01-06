import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';

const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
