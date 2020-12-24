import chai from "chai";

import App from "./App";
const Enzyme = require("enzyme");
const assert = chai.assert;

const AppComponent = <App />;
const data = [
   {
      testName: "should test Counter app initial state",
      criteria: `assert((function(){
          const counterComponent = Enzyme.mount(AppComponent);
      return counterComponent.state().count === 0;
    })())`,
   },
   {
      testName: "should test Counter app increment state",
      criteria: `assert((function(){
          const counterComponent = Enzyme.mount(AppComponent);
      counterComponent.instance().increment();
      return counterComponent.state().count === 1;
    })())`,
   },
   {
      testName: "should test Counter app decrement state",
      criteria: `assert((function(){
         const counterComponent = Enzyme.mount(AppComponent);
      counterComponent.instance().decrement();
      return counterComponent.state().count === -1;
    })())`,
   },
];

describe("Testing App", () => {
   data.forEach(({ testName, criteria }) => {
      it(testName, () => {
         eval(criteria);
      });
   });
});
