import { ReactNode } from "react";
import { TypographyVariant } from "./TypographyVariant";
import { MessageContentTypography } from "./TypographyVariants";

export type TypographyProps = {
  variant: TypographyVariant;
  children?: ReactNode;
};

export const Typography = ({ variant, children }: TypographyProps) => {
  switch (variant) {
    case TypographyVariant.MESSAGE_CONTENT:
      return <MessageContentTypography>{children}</MessageContentTypography>;
    // default:
    //   return <MuiTypography>{children}</MuiTypography>;
  }
};
