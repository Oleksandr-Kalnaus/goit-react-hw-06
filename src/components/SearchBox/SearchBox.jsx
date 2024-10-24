import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <div className={styles.form}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={styles.field}
        type="text"
        name="search"
        id="search"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
