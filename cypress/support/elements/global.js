import { login } from "../helpers/login.cy";

export const global = {
  usernameInput: () => cy.get('input[placeholder="Username"]'),
  passwordInput: () => cy.get('input[placeholder="Password"]'),
  loginButton: () => cy.get('button[type="submit"]'),
  fileInput: () => cy.get('input[type="file"]'),
  saveButton: () => cy.contains("button", "Save").click(),
  employeeIdInput: () =>
    cy.contains("label", "Employee Id").parent().parent().find("input"),
};
