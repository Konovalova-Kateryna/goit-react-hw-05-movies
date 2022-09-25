import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchQuery } from '../../services/API';

const SearchMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const [searchParams] = useSearchParams();
  console.log(search);

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    if (query === null) {
      return;
    }

    async function getSearchMovies() {
      try {
        const responce = await getSearchQuery(query);
        console.log(responce);
        setMovies([...responce.results]);
        setTotalPage(responce.total_pages);
      } catch (error) {
        console.log(error);
      }
    }
    getSearchMovies();
  }, [searchParams]);

  return <div>{totalPage > 0 && <MovieList movies={movies} />}</div>;
};
export default SearchMovies;
