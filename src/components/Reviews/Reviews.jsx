import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedbAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsInfo = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsInfo();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
