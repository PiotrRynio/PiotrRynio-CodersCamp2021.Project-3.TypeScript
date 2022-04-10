import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import styles from "./Search.module.css";

export const SearchComponent = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchIconWrapper}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        className={styles.searchInput}
      />
    </div>
  );
};
