import React from "react";
import styles from "./App.module.css";
import { SearchAppBar } from "components/organisms/SearchAppBar/SearchAppBar";
import { Box, Container } from "@mui/material";

export function App() {
  return (
    <>
      <Box className={styles.background} />
      <Container>
        <SearchAppBar />
      </Container>
    </>
  );
}
