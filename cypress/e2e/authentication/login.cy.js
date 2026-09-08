import { global } from "../../support/elements/global";

describe("Login", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("demoUrl"));
  });
  it("should successfully login with valid credentials", () => {
    global.usernameInput().type(Cypress.env("username"));
    global.passwordInput().type(Cypress.env("password"));
    global.loginButton().click();
    cy.url().should("eq", Cypress.env("homepageUrl"));
    cy.contains("h6", "Dashboard").should("be.visible");
  });

  it("should show error when invalid credentials are submitted", () => {
    global.usernameInput().type("invalidUser");
    global.passwordInput().type("invalidPass");
    global.loginButton().click();
    cy.contains(".oxd-alert-content-text", "Invalid credentials").should(
      "be.visible",
    );
  });

  it("should show validation when username is empty", () => {
    global.passwordInput().type(Cypress.env("password"));
    global.loginButton().click();
    global
      .usernameInput()
      .parents(".oxd-input-group")
      .find(".oxd-input-field-error-message")
      .should("be.visible")
      .and("contain", "Required");
  });

  it("should show validation when password is empty", () => {
    global.usernameInput().type(Cypress.env("username"));
    global.loginButton().click();
    global
      .passwordInput()
      .parents(".oxd-input-group")
      .find(".oxd-input-field-error-message")
      .should("be.visible")
      .and("contain", "Required");
  });
});
