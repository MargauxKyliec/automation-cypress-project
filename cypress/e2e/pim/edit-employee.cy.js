import { global } from "../../support/elements/global";
import { DemoLogin } from "../../support/helpers/demoLogin";
import { employeeHelpers } from "../../support/helpers/employeeHelpers";

describe("Edit Employee", () => {
  it("should edit an employee's details and verify the changes", () => {
    const employeeId = employeeHelpers.generateEmployeeId();

    cy.fixture("employees").then((employee) => {
      //Login
      DemoLogin();
      //Navigate to PIM and Add Employee
      cy.contains("span", "PIM").click();
      cy.contains("h6", "PIM").should("be.visible");
      cy.contains("button", "Add").click();
      cy.contains("h6", "Add Employee").should("be.visible");

      cy.get("input[placeholder='First Name']").type(
        employee.addEmployee.firstName,
      );
      cy.get("input[placeholder='Middle Name']").type(
        employee.addEmployee.middleName,
      );
      cy.get("input[placeholder='Last Name']").type(
        employee.addEmployee.lastName,
      );

      global.employeeIdInput().clear().type(employeeId);
      cy.contains("button", "Save").click();
      cy.contains("h6", "Personal Details").should("be.visible");
      cy.contains("button", "Save").click();

      // Verify the employee is added successfully and then edit data
      cy.contains("a", "Employee List").click();
      cy.contains("h5", "Employee Information").should("be.visible");

      //Search Created Employee
      cy.contains("label.oxd-label", "Employee Name")
        .closest(".oxd-input-group")
        .find('input[placeholder="Type for hints..."]')
        .should("be.visible")
        .type(
          `${employee.addEmployee.firstName} ${employee.addEmployee.middleName} ${employee.addEmployee.lastName}`,
        );

      cy.contains("button", "Search").click();
      cy.contains(".oxd-table-row", employee.addEmployee.firstName)
        .find(".oxd-table-cell-actions")
        .find("i.bi-pencil-fill")
        .parent("button")
        .click();

      // Verify the employee details are displayed correctly
      cy.contains("h6", "Personal Details").should("be.visible");
      cy.get("input[placeholder='First Name']").should(
        "have.value",
        employee.addEmployee.firstName,
      );
      cy.get("input[placeholder='Middle Name']").should(
        "have.value",
        employee.addEmployee.middleName,
      );
      cy.get("input[placeholder='Last Name']").should(
        "have.value",
        employee.addEmployee.lastName,
      );
      // Edit Employee Details
      cy.get("input[placeholder='First Name']")
        .clear()
        .type(employee.editEmployee.firstName);
      cy.get("input[placeholder='Middle Name']")
        .clear()
        .type(employee.editEmployee.middleName);
      cy.get("input[placeholder='Last Name']")
        .clear()
        .type(employee.editEmployee.lastName);
      cy.contains("button", "Save").click();
      //Verify the changes are saved successfully
      cy.contains("a", "Employee List").click();
      cy.contains("h5", "Employee Information").should("be.visible");
      cy.contains("label.oxd-label", "Employee Name")
        .closest(".oxd-input-group")
        .find('input[placeholder="Type for hints..."]')
        .should("be.visible")
        .type(
          `${employee.editEmployee.firstName} ${employee.editEmployee.middleName} ${employee.editEmployee.lastName}`,
        );
      cy.contains("button", "Search").click();
      cy.contains(".oxd-table-row", employee.editEmployee.firstName)
        .should("contain", employee.editEmployee.middleName)
        .and("contain", employee.editEmployee.lastName)
        .and("contain", employeeId)
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
