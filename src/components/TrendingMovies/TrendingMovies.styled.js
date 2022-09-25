import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: baseline;
  justify-content: space-between;
`;
export const TrendItem = styled.li`
  text-align: center;
  width: 300px;
`;
export const TrendTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: black;
  margin-top: 10px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

export const NavContainer = styled(NavLink)`
  width: 300px;
`;
