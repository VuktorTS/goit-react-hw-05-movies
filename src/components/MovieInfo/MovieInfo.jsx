import React from 'react';

const MovieInfo = ({
  movieDetails: {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
  },
}) => {
  //   console.log('title: ', title);
  console.log('render MovieInfo');
  return (
    <div className="container">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
        }
        alt={title}
      />
      <div>
        <h1>
          {title} ({release_date})
        </h1>
        <div>
          <p>User Score: {popularity}%</p>

          <p>
            <span>Overview</span>
            {overview}
          </p>

          <p>
            <span>Genres</span>
            {genres}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
