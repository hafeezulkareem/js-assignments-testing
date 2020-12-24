describe("Todo app tests", () => {
   context("Mobile tests", () => {
      beforeEach(() => {
         cy.viewport(360, 780);
         cy.visit("http://localhost:3000/");
      });

      it("should test background color of app", () => {
         cy.get(".app").should(
            "have.css",
            "backgroundColor",
            "rgb(70, 130, 180)"
         );
      });
   });

   context("Tablet tests", () => {
      beforeEach(() => {
         cy.viewport(760, 900);
         cy.visit("http://localhost:3000/");
      });

      it("should test background color of app", () => {
         cy.get(".app").should(
            "have.css",
            "backgroundColor",
            "rgb(255, 69, 0)"
         );
      });
   });

   context("Laptop tests", () => {
      beforeEach(() => {
         cy.viewport(1024, 900);
         cy.visit("http://localhost:3000/");
      });

      it("should test background color of app", () => {
         cy.get(".app").should(
            "have.css",
            "backgroundColor",
            "rgb(46, 139, 87)"
         );
      });
   });
});
