import {
  render,
  screen,
  fireEvent,
  waitForDomChange,
  waitFor,
  waitForElement,
} from "@testing-library/react";

import App from "./App";

describe("should describe API calls", () => {
  it("should test api call success state", async () => {
    render(<App />);
    const clickMeButtton = screen.getByText("Click Me");
    fireEvent.click(clickMeButtton);
    // waitForElement(screen.getByText("12"));
    await waitFor(() => {
      screen.getByText("12");
    });
  });
});
