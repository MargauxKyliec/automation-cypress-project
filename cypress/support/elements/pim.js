export const pim = {
  pimMenu: () => cy.contains("span", "PIM"),
  firstNameInput: () => cy.get("input[placeholder='First Name']"),
  middleNameInput: () => cy.get("input[placeholder='Middle Name']"),
  lastNameInput: () => cy.get("input[placeholder='Last Name']"),
};
