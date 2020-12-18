import React from "react";
import { mount } from "enzyme";

import AppHooks from "./AppHooks";

describe("Testing AppHooks", () => {
   it("should test Counter app state", () => {
      const counterComponent = mount(<AppHooks text="Sample text" />);
      expect(counterComponent.props().text).toBe("Sample text");
   });
});
