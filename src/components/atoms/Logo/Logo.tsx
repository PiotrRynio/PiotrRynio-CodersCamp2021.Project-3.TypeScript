import { Box } from "@mui/material";

import logoText from "../../../assets/images/logoText.png";
import logoIcon from "../../../assets/images/logoIcon.png";

type LogoProps = {
  isTextLogo: boolean;
};

export const Logo = ({ isTextLogo }: LogoProps) => {
  const logoImage = isTextLogo ? logoText : logoIcon;

  return (
    <Box
      component="img"
      sx={{
        height: 27,
      }}
      alt="inTouchLogo"
      src={logoImage}
    />
  );
};
