import TrendingMovies from 'components/TrendingMovies';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h2>Trending today</h2>
      <TrendingMovies />
      <Outlet />
    </main>
  );
};
export default Home;
