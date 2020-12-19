import React from "react";
import { mount } from "enzyme";

import App from "./App";

describe("Testing App", () => {
   it("should test componentDidMount", () => {
      const mockFetch = jest.fn();

      const counterComponent = mount(<App fetch={mockFetch} />);
      expect(mockFetch).toHaveBeenCalled();
   });
});
