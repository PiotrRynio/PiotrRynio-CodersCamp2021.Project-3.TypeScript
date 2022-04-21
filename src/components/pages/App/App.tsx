import { Box } from "@mui/material";
import { ChatPage, SignUpPage } from "components";
import styles from "./App.module.css";
import { AuthProvider } from "contexts";

export function App() {
  return (
    <AuthProvider>
      <SignUpPage />
    </AuthProvider>
  );
}
