import MuiTypography from "@mui/material/Typography";
import { TypographyVariantsProps } from "./TypographyVariantsProps";

export const MessageContentTypography = ({
  children,
}: TypographyVariantsProps) => (
  <MuiTypography variant="body1" noWrap component="div">
    {children}
  </MuiTypography>
);
