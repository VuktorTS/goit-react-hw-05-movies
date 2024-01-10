import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedbAPI';
import { ReviewsContent, ReviewsList, ReviewsTitle } from './Reviews.styled';
import { NotInfo } from 'components/NotInfo/NotInfo';

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
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewsTitle>Author: {author}</ReviewsTitle>
                <ReviewsContent>{content}</ReviewsContent>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <NotInfo />
      )}
    </>
  );
};

export default Reviews;
