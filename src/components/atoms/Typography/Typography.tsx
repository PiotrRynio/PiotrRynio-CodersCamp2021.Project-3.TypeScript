export type TypographyProps = {
  content: string;
};

export const Typography = ({ content }: TypographyProps) => {
  return <span>{content}</span>;
};
