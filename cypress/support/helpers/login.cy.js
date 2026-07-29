export function login({ demoUrl, homepageUrl, username, password }) {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.visit(demoUrl);

  cy.get("input[placeholder='Username']").should("be.visible").type(username);

  cy.get("input[placeholder='Password']")
    .should("be.visible")
    .type(password, { log: false });

  cy.get("button[type='submit']").click();

  cy.url({ timeout: 20000 }).should("eq", homepageUrl);
}
