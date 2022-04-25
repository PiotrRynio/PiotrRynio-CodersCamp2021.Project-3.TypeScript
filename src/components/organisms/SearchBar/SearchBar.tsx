import { Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo, Search } from "components";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useAuth } from "contexts";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logoutAndGoToLoginPage = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className={styles.appBar}>
      <div
        className={styles.iconButton}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      >
        <MenuIcon />
        {isMenuOpen && (
          <Box className={styles.menuBox}>
            <button
              className={styles.logoutButton}
              onClick={logoutAndGoToLoginPage}
            >
              Logout
            </button>
          </Box>
        )}
      </div>
      <Logo isTextLogo={true} />
      <Search />
    </nav>
  );
};
