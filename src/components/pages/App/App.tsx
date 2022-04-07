import React from "react";
import styles from "./App.module.css";
import { SearchAppBar } from "components/organisms/SearchAppBar/SearchAppBar";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Box className={styles.background}></Box>
      <Container sx={{ marginY: 10 }}>
        <SearchAppBar />
      </Container>
    </>
  );
}

export default App;
