import SearchBox from 'components/SearchBox/SearchBox';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const createSearch = name => {
    setSearch(name);
    navigate(`?query=${name}`, { replace: true });
  };

  return (
    <main>
      <h1>Movies</h1>
      <SearchBox onSubmit={createSearch} />
      <SearchMovies search={search} />
    </main>
  );
};
export default Movies;
