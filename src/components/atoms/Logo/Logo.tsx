import { Box } from "@mui/material";
import logoText from "../../../assets/images/logoText.png";

export const Logo = () => {
  return (
    <Box
      component="img"
      sx={{
        height: 27,
      }}
      alt="Your logo."
      src={logoText}
    />
  );
};
