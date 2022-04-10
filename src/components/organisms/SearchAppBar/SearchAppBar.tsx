import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "components/atoms/Logo/Logo";
import { SearchComponent } from "components/molecules/Search/Search";
import styles from "./SearchAppBar.module.css";

export const SearchAppBar = () => {
  return (
    <Box id="box" className={styles.navBox}>
      <AppBar className={styles.appBar}>
        <Toolbar>
          <IconButton aria-label="open drawer" className={styles.iconButton}>
            <MenuIcon />
          </IconButton>
          <Logo isTextLogo={true} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={styles.typography}
          />
          <SearchComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
