import { Box } from "@mui/material";
import { ChatSection, SearchBar } from "components";
import styles from "./ChatPage.module.css";
import { useWindowWidth } from "utils";
import { useState, useEffect } from "react";
import { useAuth } from "contexts";
import { useNavigate } from "react-router-dom";
import { LeftSection } from "components";

export const ChatPage = () => {
  const { width } = useWindowWidth();
  const [side, setSide] = useState<"left" | "right">("left");
  const navigate = useNavigate();
  const { currentUser, userId, userData } = useAuth();

  console.log(userData);
  /*  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, []);*/

  return (
    <Box className={styles.background}>
      <SearchBar />
      <div className={styles.main}>
        <div
          className={`${styles.leftSection} ${
            (width < 800 && side === "left") || width >= 800 ? "" : styles.hide
          }`}
        >
          <LeftSection showMessages={() => setSide("right")} />
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
