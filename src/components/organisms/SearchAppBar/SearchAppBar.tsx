import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchComponent } from "../../molecules/Search/Search";
import styles from "./SearchAppBar.module.css";
import { Logo } from "components/atoms/Logo/Logo";

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
          ></Typography>
          <SearchComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
