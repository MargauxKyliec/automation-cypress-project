import { login } from "./login.cy";

export function DemoLogin() {
  login({
    demoUrl: Cypress.env("demoUrl"),
    homepageUrl: Cypress.env("homepageUrl"),
    username: Cypress.env("username"),
    password: Cypress.env("password"),
  });
}
