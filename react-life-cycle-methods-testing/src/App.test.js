import React from "react";
import { mount } from "enzyme";

import App from "./App";

describe("Testing App", () => {
   it("should test componentDidMount", () => {
      const mockFetch = jest.fn();

      mount(<App fetch={mockFetch} />);
      expect(mockFetch).toHaveBeenCalled();
   });

   it("should test componentWillUnmount", () => {
      const mockFetch = jest.fn();

      const component = mount(<App fetch={mockFetch} />);
      const componentInstance = component.instance();

      expect(componentInstance.timer).toBeDefined();
      component.unmount();
      expect(componentInstance.timer).toBeUndefined();
   });
});
