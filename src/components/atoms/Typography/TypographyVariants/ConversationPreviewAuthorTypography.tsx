import MuiTypography from "@mui/material/Typography";
import { TypographyVariantsProps } from "./TypographyVariantsProps";

export const ConversationPreviewAuthorTypography = ({
  children,
}: TypographyVariantsProps) => (
  <MuiTypography
    sx={{ display: "inline" }}
    component="span"
    variant="body2"
    color="text.primary"
  >
    {children}
  </MuiTypography>
);
