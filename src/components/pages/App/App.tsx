import { Box } from "@mui/material";
import { SearchAppBar, ChatSection } from "components";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Box className={styles.background}>
        <Box>
          <Box>
            <SearchAppBar />
          </Box>
          <div className={styles.main}>
            <div className={styles.leftSection}>Left Side</div>
            <div className={styles.chatContainer}>
              <ChatSection />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
