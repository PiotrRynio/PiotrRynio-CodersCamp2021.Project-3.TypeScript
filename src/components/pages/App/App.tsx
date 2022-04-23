import { Box } from "@mui/material";
import { ChatPage, SignUpPage, WelcomePage, LoginPage } from "components";
import { AuthProvider, DatabaseProvider } from "contexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <AuthProvider>
        <DatabaseProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </DatabaseProvider>
      </AuthProvider>
    </Router>
  );
}
