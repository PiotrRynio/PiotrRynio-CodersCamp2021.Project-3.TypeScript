import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
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
          <Logo />
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
