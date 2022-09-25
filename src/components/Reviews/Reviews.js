import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { ReviewsAutor, ReviewsContent, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const responce = await getMovieReviews(movieId);
        setReviews([...responce.results]);
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.total_results === 0 ? (
        <ReviewsContent>There is no review yet</ReviewsContent>
      ) : (
        <ReviewsList>
          {reviews.map(item => (
            <li key={item.id}>
              <ReviewsAutor>{item.author}</ReviewsAutor>
              <ReviewsContent>{item.content}</ReviewsContent>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
