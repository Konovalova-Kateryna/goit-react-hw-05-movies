import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: baseline;
`;

export const MovieListItem = styled.li`
  width: 300px;
  text-align: center;
`;

export const MovieListTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: orange;
  }
`;
