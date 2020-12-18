import { shallow } from "enzyme";

import App from "./App";

describe("Testing App", () => {
   it("should test Counter app state", () => {
      const counterComponent = shallow(<App />);
      expect(counterComponent.state().count).toBe(0);
   });

   it("should test Counter app increment state", () => {
      const counterComponent = shallow(<App />);
      counterComponent.instance().increment();
      expect(counterComponent.state().count).toBe(1);
   });

   it("should test Counter app decrement state", () => {
      const counterComponent = shallow(<App />);
      counterComponent.instance().decrement();
      expect(counterComponent.state().count).toBe(-1);
   });
});
