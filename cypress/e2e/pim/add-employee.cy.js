import { global } from "../../support/elements/global";
import { DemoLogin } from "../../support/helpers/demoLogin";
import { employeeHelpers } from "../../support/helpers/employeeHelpers";

describe("Add Employee", () => {
  it("Should Verify the Add Employee", () => {
    const employeeId = employeeHelpers.generateEmployeeId();
    DemoLogin();

    cy.contains("span", "PIM").click();
    cy.contains("h6", "PIM").should("be.visible");
    cy.contains("button", "Add").click();
    cy.contains("h6", "Add Employee").should("be.visible");
    cy.get("input[placeholder='First Name']").type("John");
    cy.get("input[placeholder='Middle Name']").type("Cruz");
    cy.get("input[placeholder='Last Name']").type("Doe");
    global.employeeIdInput().clear().type(employeeId);
    cy.contains("button", "Save").click({ timeout: 100000 });
    cy.contains("h6", "Personal Details").should("be.visible");
    cy.contains("button", "Save").click({ timeout: 100000 });
  });
});
