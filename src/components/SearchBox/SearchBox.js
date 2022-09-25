import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import {
  SearchConteiner,
  StyledForm,
  SearchButton,
  StyledInput,
} from './SearchBox.styled';

const initialValues = { searchParam: '' };

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    if (value.searchParam.trim() === '') {
      alert('Please specify your search query.');
      resetForm();
      return;
    }
    onSubmit(value.searchParam);
    resetForm();
  };

  return (
    <SearchConteiner>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledForm>
          <StyledInput
            type="text"
            name="searchParam"
            placeholder="Search movies......"
          />
          <SearchButton type="submit">
            <ImSearch />
          </SearchButton>
        </StyledForm>
      </Formik>
    </SearchConteiner>
  );
};
export default SearchBox;
