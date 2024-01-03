import { NewsPage } from 'components/page/NewsPage';
import { TodoPage } from 'components/page/TodoPage';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from './page/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
};
