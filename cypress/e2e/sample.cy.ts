// cypress/e2e/sample.cy.ts
describe("My First Test", () => {
  it("Visits the app", () => {
    cy.visit("/");
    cy.contains("Hello, Styled Components!");
  });
});
