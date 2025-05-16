import { Field, Formik, Form } from "formik";
import s from "./SearchBar.module.css";

import toast from "react-hot-toast";

const SearchBar = ({ query, handleChangeQuery }) => {
  const initialValues = {
    query: query || "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    const trimmedQuery = values.query.trim();
    if (!trimmedQuery) {
      toast.error("Please enter your request");
      return;
    }
    handleChangeQuery(trimmedQuery);

    options.resetForm();
  };
  return (
    <div>
      <header className={s.wrapper}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <Field
              name="query"
              className={s.input}
              placeholder=" Search films"
              autoComplete="off"
              autoFocus
            />
            <button className={s.button} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </header>
    </div>
  );
};
export default SearchBar;
