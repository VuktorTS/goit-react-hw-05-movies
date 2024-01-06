import React from 'react';
import { Link } from 'react-router-dom';

const MuviesList = ({ muviesTrend }) => {
  return (
    <ul>
      {muviesTrend.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MuviesList;
// adult: false;
// backdrop_path: '/96S2aGGh6I7og1oNrAiRHxGz0PH.jpg';
// genre_ids: (3)[(35, 18, 10749)];
// id: 1036619;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Good Grief';
// overview: "When his husband unexpectedly dies, Marc's world shatters, sending him and his two best friends on a soul-searching trip to Paris that reveals some hard truths they each needed to face.";
// popularity: 27.922;
// poster_path: '/wJFHUglmh7xlY7g9Ql85QAJBZ6n.jpg';
// release_date: '2023-12-29';
// title: 'Good Grief';
// video: false;
// vote_average: 5.6;
// vote_count: 7;
