import React from "react";
import styles from "./App.module.css";
import { SearchAppBar } from "components/organisms/SearchAppBar/SearchAppBar";
import { Box, Container } from "@mui/material";
import { ChatSection } from "../../organisms/ChatSection/ChatSection";

export function App() {
  return (
    <>
      <Box className={styles.background}>
        <div>
          <SearchAppBar />
        </div>
        <div className={styles.main}>
          <div className={styles.leftSection}>LeftSide</div>
          <div className={styles.chatContainer}>
            <ChatSection />
          </div>
        </div>
      </Box>
    </>
  );
}
