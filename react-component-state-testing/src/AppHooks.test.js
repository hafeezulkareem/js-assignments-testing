import React from "react";
import { shallow } from "enzyme";

import AppHooks from "./AppHooks";

describe("Testing AppHooks", () => {
   const setState = jest.fn();
   const useStateSpy = jest.spyOn(React, "useState");
   useStateSpy.mockImplementation((init) => [(init = 0), setState]);

   it("should test Counter app increment state", () => {
      const counterComponent = shallow(<AppHooks />);
      counterComponent.find("#incrementButton").props().onClick();
      expect(setState).toHaveBeenCalledWith(1);
   });

   it("should test Counter app decrement state", () => {
      const counterComponent = shallow(<AppHooks />);
      counterComponent.find("#decrementButton").props().onClick();
      expect(setState).toHaveBeenCalledWith(-1);
   });
});
