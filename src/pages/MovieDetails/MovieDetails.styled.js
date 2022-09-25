import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;

export const FilmTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 15px;
`;
export const FilmBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const FilmOverview = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const FilmContent = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const FilmGenres = styled.ul`
  font-size: 20px;
  font-weight: 500;
`;
export const FilmGenresItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const AdditionalSection = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;
