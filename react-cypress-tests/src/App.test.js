import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders counter react app decrement functionality", () => {
  render(<App />);
  const decrementButton = screen.getByText(/-/i);

  expect(screen.getByText(/0/i)).toBeInTheDocument();

  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  expect(screen.getByText(/-2/i)).toBeInTheDocument();
});

test("renders counter react app increment functionality", () => {
  render(<App />);
  const incrementButton = screen.getByText(/\+/i);

  expect(screen.getByText(/0/i)).toBeInTheDocument();

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(screen.getByText(/2/i)).toBeInTheDocument();
});
