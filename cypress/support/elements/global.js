export const global = {
  fileInput: () => cy.get('input[type="file"]'),
  saveButton: () => cy.contains("button", "Save").click(),
  employeeIdInput: () =>
    cy.contains("label", "Employee Id").parent().parent().find("input"),
};
