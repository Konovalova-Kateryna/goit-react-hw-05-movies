import { useLocation } from 'react-router-dom';
import {
  MovieListItem,
  StyledMovieList,
  MovieListTitle,
  MovieLink,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <StyledMovieList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieListItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
            />
            <MovieListTitle>{title}</MovieListTitle>
          </MovieLink>
        </MovieListItem>
      ))}
    </StyledMovieList>
  );
};
