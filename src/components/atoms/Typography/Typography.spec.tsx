import { render, screen } from "test-utils";
import { Typography } from "./Typography";
import { TypographyVariant } from "./TypographyVariant";

describe("<Typography> component", () => {
  const testText = "test text";

  it("should display MessageContent text, if component is rendered", () => {
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
});
