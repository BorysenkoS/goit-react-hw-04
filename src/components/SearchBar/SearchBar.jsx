import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <header className={css.searchBar}>
        <form>
          <input
            className={css.searchInput}
            type="text"
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
