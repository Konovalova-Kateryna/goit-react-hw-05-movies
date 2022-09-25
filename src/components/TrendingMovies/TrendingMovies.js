const { useEffect, useState } = require('react');
const { getTrendingMoovies } = require('services/API');
const { MovieList } = require('../MovieList/MovieList');

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const responce = await getTrendingMoovies();
        console.log(responce);
        setMovies([...responce.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return <MovieList movies={movies} />;
};

export default TrendingMovies;
