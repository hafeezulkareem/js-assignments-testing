// Testing Stopwatch functionalities - (start & stop) actions
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
let dom, container;

describe("Testing Async JS timer DOM POC", () => {
   beforeEach(() => {
      dom = new JSDOM(html, { runScripts: "dangerously" });
      container = dom.window.document.body;
      jest.useFakeTimers();
   });

   it("should test start of Async functionalities", () => {
      const startButtonElement = container.querySelector("#start");
      const countElement = container.querySelector("#count");
      startButtonElement.click();
      jest.advanceTimersByTime(1000);
      expect(countElement.innerHTML).toBe("1");
      jest.advanceTimersByTime(1000);
      expect(countElement.innerHTML).toBe("2");
   });

   it("should test stop/clearing of Async functionalities", () => {
      const startButtonElement = container.querySelector("#start");
      const stopButtonElement = container.querySelector("#stop");
      const countElement = container.querySelector("#count");
      startButtonElement.click();
      jest.advanceTimersByTime(1000);
      expect(countElement.innerHTML).toBe("1");

      stopButtonElement.click();
      jest.advanceTimersByTime(1000);
      expect(countElement.innerHTML).toBe("1");
      jest.advanceTimersByTime(1000);
      expect(countElement.innerHTML).toBe("1");
   });
});
