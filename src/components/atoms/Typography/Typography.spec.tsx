import { render, screen } from "test-utils";
import { Typography } from "./Typography";
import { TypographyVariant } from "./TypographyVariant";

describe("<Typography> component", () => {
  const testText = "test text";

  it("should display message content text, if component is rendered", () => {
    // when
    render(
      <Typography variant={TypographyVariant.MESSAGE_CONTENT}>
        {testText}
      </Typography>
    );

    // then
    const textComponent = screen.getByText(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });

  it("should display chat title text, if component is rendered", () => {
    // when
    render(
      <Typography variant={TypographyVariant.CHAT_TITLE}>{testText}</Typography>
    );

    // then
    const textComponent = screen.getByText(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });
});
