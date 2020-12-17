import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

describe("TodoApp test cases", () => {
   it("should test rendering default todos", () => {
      render(<App />);

      screen.getByText("Learn about React");
      screen.getByText("Meet friend for lunch");
      screen.getByText("Build really cool todo app");
      screen.getAllByText("Complete");
      screen.getAllByText("x");
   });

   it("should add a new todo", () => {
      render(<App />);

      const todoInput = screen.getByTestId("todoInput");
      fireEvent.change(todoInput, {
         target: { value: "New todo is adding to the queue" },
      });
      fireEvent.submit(todoInput);
      screen.getByText("New todo is adding to the queue");
   });

   it("should remove a todo", () => {
      render(<App />);

      const todoRemoveButtons = screen.getAllByTestId("todoRemoveButton");
      fireEvent.click(todoRemoveButtons[0]);
      expect(screen.queryByText("Learn about React")).toBeNull();
   });

   it("should complete a todo", () => {
      render(<App />);

      const todoCompleteButton = screen.getAllByTestId("todoCompleteButton");
      fireEvent.click(todoCompleteButton[0]);
      expect(screen.queryByText("Learn about React")).toHaveStyle({
         textDecoration: "line-through",
      });
   });
});
