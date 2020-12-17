import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Todo } from "../App";

const todo = {
   text: "Sample todo for testing",
   isCompleted: false,
};

describe("Todo component test cases", () => {
   it("should render Todo component", () => {
      render(
         <Todo
            todo={todo}
            index={0}
            completeTodo={() => {}}
            removeTodo={() => {}}
         />
      );

      screen.getByText("Sample todo for testing");
   });

   it("should call complete todo", () => {
      const completeTodo = jest.fn();
      render(
         <Todo
            todo={todo}
            index={0}
            completeTodo={completeTodo}
            removeTodo={() => {}}
         />
      );

      const todoCompleteButton = screen.getByTestId("todoCompleteButton");
      fireEvent.click(todoCompleteButton);
      expect(completeTodo).toHaveBeenCalled();
   });

   it("should call remove todo", () => {
      const removeTodo = jest.fn();
      render(
         <Todo
            todo={todo}
            index={0}
            completeTodo={() => {}}
            removeTodo={removeTodo}
         />
      );

      const todoRemoveButton = screen.getByTestId("todoRemoveButton");
      fireEvent.click(todoRemoveButton);
      expect(removeTodo).toHaveBeenCalled();
   });
});
