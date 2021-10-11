import s from "./Filter.module.css";
import PropTypes from "prop-types";
const filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter">
      <h3 className={s.title}>Find contact by name</h3>
      <input
        name="filter"
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default filter;

filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
