import { global } from "../../support/elements/global";
import { DemoLogin } from "../../support/helpers/demo-login";
//import { employeeHelpers } from "../../support/helpers/employee-helper";
import { fileHelpers } from "../../support/helpers/file-helpers";

describe("Add Employee", () => {
  it("Should Verify the Add Employee", () => {
    DemoLogin();
    cy.contains("span", "PIM").click();
    cy.contains("h6", "PIM").should("be.visible");
    cy.contains("button", "Add").click();
    cy.contains("h6", "Add Employee").should("be.visible");

    cy.get("input[placeholder='First Name']").type("John");
    cy.get("input[placeholder='Middle Name']").type("Cruz");
    cy.get("input[placeholder='Last Name']").type("Doe");

    fileHelpers.uploadFile("purplem.jpg");
    cy.contains("button", "Save").click({ timeout: 20000 });
    cy.contains("h6", "Personal Details").should("be.visible");
    cy.contains("button", "Save").click({ timeout: 20000 });
  });
});
