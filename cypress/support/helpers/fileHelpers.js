import { global } from "../elements/global";

export const fileHelpers = {
  uploadFile: (fileName, options = {}) => {
    const { force = true, subjectType = "input" } = options;

    global.fileInput().selectFile(`cypress/fixtures/${fileName}`, {
      force,
      subjectType,
    });
  },
};
