/* global cy */
/*
describe("Homepage", () => {
  it("should be render properly", () => {
    cy.visit("http://localhost:3000");
    cy.contains("HRnet");
    cy.contains("Create Employee");
  });

  it("should be render properly", () => {
    cy.visit("http://localhost:3000");
    cy.get("#first-name").type("Jean");
    cy.get("#first-name").should("have.value", "Jean");
  });
});*/

describe("Homepage", () => {
  it("should be render properly", () => {
    cy.visit("http://localhost:3000");
    cy.contains("HRnet");
    cy.contains("Create Employee");
  });

  it("should be render properly", () => {
    cy.visit("http://localhost:3000");
    cy.get("#last-name").type("Pierre");
    cy.get("#last-name").should("have.value", "Pierre");
  });
});

