import { ReactNode } from "react";
import MuiTypography from "@mui/material/Typography";

export type RegularTypographyProps = {
  children?: ReactNode;
};

export const RegularTypography = ({ children }: RegularTypographyProps) => (
  <MuiTypography>{children}</MuiTypography>
);
