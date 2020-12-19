describe("timer app tests", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("cypress/fixtures/src/");
  });

  it("should test start of Async functionalities", () => {
    cy.get("#start").click();
    cy.tick(10000);
    cy.get("#count").should("contain", "10");
    cy.tick(2000);
    cy.get("#count").should("contain", "12");
  });

  it("should test stop/clearing of Async functionalities", () => {
    cy.get("#start").click();
    cy.tick(1000);
    cy.get("#count").should("contain", "1");
    cy.get("#stop").click();
    cy.tick(1000);
    cy.get("#count").should("contain", "1");
    cy.tick(10000);
    cy.get("#count").should("contain", "1");
  });
});
