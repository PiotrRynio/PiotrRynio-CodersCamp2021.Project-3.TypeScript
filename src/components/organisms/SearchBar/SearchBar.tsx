import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo, Search } from "components";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <nav className={styles.appBar}>
      <IconButton aria-label="open drawer" className={styles.iconButton}>
        <MenuIcon />
      </IconButton>
      <Logo isTextLogo={true} />
      <Search />
    </nav>
  );
};
