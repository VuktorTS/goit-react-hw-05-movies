import { NotInfo } from 'components/NotInfo/NotInfo';

import { ReviewsContent, ReviewsList, ReviewsTitle } from './Reviews.styled';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { reviews, isLoading, error } = useFetchMovieReviews();
  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <div style={{ textAlign: 'center', fontSize: '35px' }}>
          Error: {error}
        </div>
      )}
      {reviews.length > 0 ? (
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
