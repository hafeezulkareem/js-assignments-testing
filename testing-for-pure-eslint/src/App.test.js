import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test cases", () => {
   test("renders learn react link", () => {
      render(<App />);
      const linkElement = screen.getByText(/Click Me/i);
      expect(linkElement).toBeInTheDocument();
   });
});
