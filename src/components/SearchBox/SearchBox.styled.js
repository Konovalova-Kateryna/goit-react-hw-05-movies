import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchConteiner = styled.div`
  padding-top: 10px;
  /* display: block; */
  text-align: center;
  /* margin-left: auto;
  margin-right: auto; */
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
export const SearchButton = styled.button`
  padding: 5px;
  background-color: white;
  color: black;

  text-align: center;
  :hover {
    border-color: orange;
    background-color: orange;
    color: white;
  }
`;
export const StyledInput = styled(Field)`
  padding: 5px;
  height: 35px;
  border-right: none;
`;
