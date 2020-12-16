const nock = require("nock");

describe("VanillaJS APIs test cases", () => {
   beforeEach(() => {
      cy.visit("cypress/fixtures/src/");
   });

   it("should test posts fetching state", async () => {
      nock("https://jsonplaceholder.typicode.com")
         .get("/posts")
         .reply(100, {
            posts: [
               {
                  id: "1",
                  title: "Sample post",
                  description: "This is the post description",
               },
            ],
         });

      await cy.get("#getPostsButton").click();
      cy.get("#loader").should("have.text", "loader...");
   });

   it("should test posts failure state", async () => {
      nock("https://jsonplaceholder.typicode.com")
         .get("/posts")
         .reply(400, {
            posts: [
               {
                  id: "1",
                  title: "Sample post",
                  description: "This is the post description",
               },
            ],
         });

      await cy.get("#getPostsButton").click();
      cy.get("#error").should("have.text", "Something went wrong.");
   });

   it("should test posts failure state", async () => {
      nock("https://jsonplaceholder.typicode.com")
         .get("/posts")
         .reply(200, {
            posts: [
               {
                  id: "1",
                  title: "Sample post",
                  description: "This is the post description",
               },
            ],
         });

      await cy.get("#getPostsButton").click();
      cy.get("#success").should("have.text", "Success");
   });
});
