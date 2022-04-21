import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./Search.module.scss";

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.search}>
      {isOpen ? (
        <InputBase
          autoFocus
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          className={styles.searchInput}
        />
      ) : (
        <></>
      )}
      <div className={styles.searchIconWrapper}>
        <SearchIcon
          className={styles.searchIcon}
          onClick={() => setIsOpen((prevState: boolean) => !prevState)}
        />
      </div>
    </div>
  );
};
