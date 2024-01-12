import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Suspense
          fallback={<Loader/>}
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
