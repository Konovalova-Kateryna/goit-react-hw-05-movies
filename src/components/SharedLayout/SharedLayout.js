import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Spinner } from '../Loader';
import {
  Header,
  Navigation,
  Container,
  StyledLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Navigation>
          <StyledLink end to="/" state={{ from: location }}>
            Home
          </StyledLink>
          <StyledLink to="/movies" state={{ from: location }}>
            Movies
          </StyledLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;
