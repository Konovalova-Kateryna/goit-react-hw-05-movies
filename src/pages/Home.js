import TrendingMovies from 'components/TrendingMovies';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMovies />
      <Outlet />
    </main>
  );
};
export default Home;
