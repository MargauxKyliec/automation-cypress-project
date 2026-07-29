import { DemoLogin } from "../support/helpers/demo-login.cy";

describe("Demo Login", () => {
  it("Should Login to OrangeHRM", () => {
    DemoLogin();
  });
});
