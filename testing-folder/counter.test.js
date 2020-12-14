import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './src/index.html'), 'utf8');
let dom, container;

describe("Testing JS DOM POC", () => {

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" })
    container = dom.window.document.body
  });

  test("should test counter app decrement functionality", () => {
    const decrementButton = container.querySelector("#decrementButton")
    const count = container.querySelector('#count')
    decrementButton.click()
    expect(count.innerHTML).toBe('-1')
    decrementButton.click()
    expect(count.innerHTML).toBe('-2')
  });

  test("should test counter app increment functionality", () => {
    const incrementButton = container.querySelector("#incrementButton")
    const count = container.querySelector('#count')
    incrementButton.click()
    expect(count.innerHTML).toBe('1')
    incrementButton.click()
    expect(count.innerHTML).toBe('2')
  });
});
