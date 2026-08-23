import { global } from "../../support/elements/global";
import { DemoLogin } from "../../support/helpers/demoLogin";
import { employeeHelpers } from "../../support/helpers/employeeHelpers";

describe("Add Employee", () => {
  it("should create, verify, search, and delete an employee", () => {
    const employeeId = employeeHelpers.generateEmployeeId();

    cy.fixture("employees").then((employee) => {
      //Login
      DemoLogin();
      //Navigate to PIM and Add Employee
      cy.contains("span", "PIM").click();
      cy.contains("h6", "PIM").should("be.visible");
      cy.contains("button", "Add").click();
      cy.contains("h6", "Add Employee").should("be.visible");

      cy.get("input[placeholder='First Name']").type(employee.firstName);
      cy.get("input[placeholder='Middle Name']").type(employee.middleName);
      cy.get("input[placeholder='Last Name']").type(employee.lastName);

      global.employeeIdInput().clear().type(employeeId);
      cy.contains("button", "Save").click();
      cy.contains("h6", "Personal Details").should("be.visible");
      cy.contains("button", "Save").click();

      // Verify the employee is added successfully and then delete data
      cy.contains("a", "Employee List").click();
      cy.contains("h5", "Employee Information").should("be.visible");

      //Search Created Employee
      cy.contains("label.oxd-label", "Employee Name")
        .closest(".oxd-input-group")
        .find('input[placeholder="Type for hints..."]')
        .should("be.visible")
        .type(
          `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
        );

      cy.contains("button", "Search").click();
      cy.contains(".oxd-table-row", employee.firstName)
        .find(".oxd-table-cell-actions")
        .find("i.bi-trash")
        .parent("button")
        .click();
      cy.contains("p", "Are you Sure?").should("be.visible");
      cy.contains("button", "Yes, Delete").click({ timeout: 40000 });
      cy.contains("span", "No Records Found").should("be.visible");
    });
  });
});
