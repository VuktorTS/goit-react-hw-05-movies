import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/movies'}>Movies</Link>
        </nav>
      </header>
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;
