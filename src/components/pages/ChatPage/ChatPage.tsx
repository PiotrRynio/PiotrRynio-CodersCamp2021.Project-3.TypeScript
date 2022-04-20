import { Box } from "@mui/material";
import { ChatSection, SearchBar } from "components";
import styles from "./ChatPage.module.css";
import useWindowWidth from "./useWindowWidth";
import { useState } from "react";

export const ChatPage = () => {
  const { width } = useWindowWidth();
  const [side, setSide] = useState<"left" | "right">("left");

  return (
    <Box className={styles.background}>
      <Box>
        <SearchBar />
      </Box>
      <div className={styles.main}>
        <div
          className={`${styles.leftSection} ${
            (width < 800 && side === "left") || width >= 800 ? "" : styles.hide
          }`}
        >
          Left Side
          <button onClick={() => setSide(() => "right")}>test button</button>
        </div>
        <div
          className={`${styles.chatContainer} ${
            (width < 800 && side === "right") || width >= 800 ? "" : styles.hide
          }`}
        >
          <ChatSection closeFunction={() => setSide("left")} />
        </div>
      </div>
    </Box>
  );
};
