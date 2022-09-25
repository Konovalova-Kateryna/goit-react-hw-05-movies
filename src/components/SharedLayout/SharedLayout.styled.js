import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1300px;
  /* padding: 15px; */
  /* border-bottom: 1px solid gray; */
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;

  border-bottom: 1px solid grey;
`;

export const Navigation = styled(NavLink)`
  margin-left: 25px;
  font-size: 26px;
  font-weight: 500;
  color: black;
  &.active {
    color: orange;
  }
`;
export const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 20px;
  &.active {
    color: orange;
  }
`;
