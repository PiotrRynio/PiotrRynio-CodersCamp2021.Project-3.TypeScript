import { render, screen } from "test-utils";
import { Typography } from "./Typography";

describe("Typography component", () => {
  const testText = "test text";

  it("should display REGULAR text, if component is rendered", () => {
    // when
    render(<Typography>{testText}</Typography>);

    // then
    const textComponent = screen.getByText(/test text/i);
    expect(textComponent).toBeInTheDocument();
  });
});
