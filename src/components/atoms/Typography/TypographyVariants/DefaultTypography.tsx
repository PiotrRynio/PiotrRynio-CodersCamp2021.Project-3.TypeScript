import { ReactNode } from "react";
import MuiTypography from "@mui/material/Typography";

export type DefaultTypographyProps = {
  children?: ReactNode;
};

export const DefaultTypography = ({ children }: DefaultTypographyProps) => (
  <MuiTypography>{children}</MuiTypography>
);
