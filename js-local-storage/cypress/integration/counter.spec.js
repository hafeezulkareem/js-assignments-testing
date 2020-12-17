describe("Counter app tests", () => {
   beforeEach(() => {
      cy.visit("cypress/fixtures/src/");
   });

   // NOTE: All tests are connected as count persisting
   it("should test counter app increment after clearLocalStorage functionality", () => {
      cy.get("#incrementButton").click();
      cy.get("#count").should("contain", "1");
      cy.get("#incrementButton").click();
      cy.get("#count").should("contain", "2");
      cy.reload();
      cy.get("#decrementButton").click();
      cy.get("#count").should("contain", "1");
      cy.get("#decrementButton").click();
      cy.get("#count").should("contain", "0");
   });

   it("should test counter app decrement functionality", () => {
      cy.get("#decrementButton").click();
      cy.get("#count").should("contain", "-1");
      cy.get("#decrementButton").click();
      cy.get("#count").should("contain", "-2");
   });

   it("should test counter app increment functionality", () => {
      cy.get("#incrementButton").click();
      cy.get("#count").should("contain", "-1");
      cy.get("#incrementButton").click();
      cy.get("#count").should("contain", "0");
   });
});
