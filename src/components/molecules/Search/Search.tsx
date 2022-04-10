import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./Search.module.scss";

export const SearchComponent = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchIconWrapper}>
        <SearchIcon className={styles.searchIcon} />
      </div>
      <InputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        className={styles.searchInput}
      />
    </div>
  );
};
