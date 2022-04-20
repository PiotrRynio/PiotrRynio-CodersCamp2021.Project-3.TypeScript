import { Box } from "@mui/material";
import logoText from "assets/images/logoText.png";
import logoIcon from "assets/images/logoIcon.png";

type LogoProps = {
  className?: string;
  isTextLogo?: boolean;
  height?: number;
};

export const Logo = ({ className, isTextLogo, height }: LogoProps) => {
  const logoImage = isTextLogo ? logoText : logoIcon;
  return (
    <Box
      className={className}
      component="img"
      sx={{
        height: height ? height : 27,
      }}
      alt="inTouchLogo"
      src={logoImage}
    />
  );
};
