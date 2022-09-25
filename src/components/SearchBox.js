import { Field, Form, Formik } from 'formik';
import { ImSearch } from 'react-icons/im';

const initialValues = { searchParam: '' };

const SearchBar = ({ onSubmit, searchParam }) => {
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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <button type="submit">
            <ImSearch />
          </button>
          <Field
            type="text"
            name="searchParam"
            placeholder="Search movies......"
          />
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
