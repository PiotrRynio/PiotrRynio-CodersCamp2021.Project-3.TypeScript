import MuiTypography from "@mui/material/Typography";
import { TypographyVariantsProps } from "./TypographyVariantsProps";

export const SectionTitleTypography = ({
  children,
}: TypographyVariantsProps) => (
  <MuiTypography variant="h3" fontWeight={700}>
    {children}
  </MuiTypography>
);
