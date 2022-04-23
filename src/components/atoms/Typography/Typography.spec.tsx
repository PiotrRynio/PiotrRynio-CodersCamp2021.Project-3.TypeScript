import { render, screen } from "test-utils";
import { Typography } from "./Typography";
import { TypographyVariant } from ".";

describe("<Typography> component", () => {
  const testText = "test text";

  it("should display regular typography, if component is rendered", () => {
    // when
    render(
      <Typography variant={TypographyVariant.REGULAR}>{testText}</Typography>
    );

    // then
    const textComponent = screen.getByText(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });

  it("should display message content, if component is rendered", () => {
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

  it("should display chat title, if component is rendered", () => {
    // when
    render(
      <Typography variant={TypographyVariant.CHAT_TITLE}>{testText}</Typography>
    );

    // then
    const textComponent = screen.getByRole("heading", { level: 5 });
    expect(textComponent).toHaveTextContent(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });

  it("should display conversation preview author, if component is rendered", () => {
    // when
    render(
      <Typography variant={TypographyVariant.CONVERSATION_PREVIEW_AUTHOR}>
        {testText}
      </Typography>
    );

    // then
    const textComponent = screen.getByText(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });

  it("should display section title, if component is rendered", () => {
    // when
    render(
      <Typography variant={TypographyVariant.SECTION_TITLE}>
        {testText}
      </Typography>
    );

    // then
    const textComponent = screen.getByRole("heading", { level: 3 });
    expect(textComponent).toHaveTextContent(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });
});
