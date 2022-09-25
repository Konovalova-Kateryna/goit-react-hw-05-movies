import { BackLink } from 'components/BackLink';
import { useEffect, useState } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/API';
import {
  DetailsContainer,
  FilmTitle,
  FilmBox,
  FilmContent,
  FilmOverview,
  FilmGenres,
  FilmGenresItem,
  AdditionalSection,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      try {
        const responce = await getMovieById(movieId);
        console.log(responce);
        setMovie(responce);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <BackLink to={location.state?.from ?? '/movie'}>Back</BackLink>
      <DetailsContainer>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <FilmTitle>{movie.title}</FilmTitle>
          <FilmBox>
            <p>
              Date of release: <FilmContent>{movie.release_date}</FilmContent>
            </p>
            <p>
              User Score: <FilmContent>{movie.vote_average}</FilmContent>
            </p>
          </FilmBox>
          <FilmOverview>
            Overview: <FilmContent>{movie.overview}</FilmContent>
          </FilmOverview>
          <FilmGenres>
            Genres:
            {movie.genres &&
              movie.genres.map(item => (
                <FilmGenresItem key={item.id}>{item.name}</FilmGenresItem>
              ))}
          </FilmGenres>
        </div>
      </DetailsContainer>

      <AdditionalSection>
        <FilmOverview>Additional information</FilmOverview>
        <ul>
          <FilmGenresItem>
            <Link to={'cast'} state={{ from: location.state.from }}>
              Cast
            </Link>
          </FilmGenresItem>
          <FilmGenresItem>
            <Link to={'reviews'} state={{ from: location.state.from }}>
              Reviews
            </Link>
          </FilmGenresItem>
        </ul>
      </AdditionalSection>
      <Outlet />
    </>
  );
};
export default MovieDetails;
