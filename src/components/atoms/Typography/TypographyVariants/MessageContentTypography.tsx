import { ReactNode } from "react";
import MuiTypography from "@mui/material/Typography";

export type MessageContentTypographyProps = {
  children?: ReactNode;
};

export const MessageContentTypography = ({
  children,
}: MessageContentTypographyProps) => (
  <MuiTypography variant="body1" noWrap component="div">
    {children}
  </MuiTypography>
);
