describe("Counter app tests", () => {
   beforeEach(() => {
      cy.visit("cypress/fixtures/src/");
   });

   it("should test counter app decrement functionality", () => {
      cy.get("#decrementButton").click();
      cy.get("#count").should("contain", "-1");
      cy.get("#decrementButton").click();
      cy.get("#count").should("contain", "-2");
   });

   it("should test counter app increment functionality", () => {
      cy.get("#incrementButton").click();
      cy.get("#count").should("contain", "1");
      cy.get("#incrementButton").click();
      cy.get("#count").should("contain", "2");
   });
});
