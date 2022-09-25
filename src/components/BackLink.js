import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  width: fit-content;
  border: 1px solid white;
  border-radius: 4px;
  background-color: white;
  padding: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  gap: 4px;
  align-items: center;
  justify-content: baseline;
  margin: 10px;
  :hover {
    border-color: orange;
    background-color: orange;
    color: white;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <TiArrowBackOutline size="24" />
      {children}
    </StyledLink>
  );
};
