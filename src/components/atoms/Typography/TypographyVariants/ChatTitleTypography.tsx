import MuiTypography from "@mui/material/Typography";
import { TypographyVariantsProps } from "./TypographyVariantsProps";

export const ChatTitleTypography = ({ children }: TypographyVariantsProps) => (
  <MuiTypography variant="h5" noWrap fontWeight={700}>
    {children}
  </MuiTypography>
);
