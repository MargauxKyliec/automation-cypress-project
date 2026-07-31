export const employeeHelpers = {
  generateEmployeeId() {
    return Date.now().toString().slice(-4);
  },
};
