import fs from "fs";
import { resolve } from "path";

const resolvePath = (fileName = "users.txt") => {
  const filePath = resolve(`./files/${fileName}`);
  return filePath;
};

export const writeFileAsync = async (USERS) => {
  await fs.writeFile(resolvePath(), JSON.stringify(USERS, null, 4), (err) => {
    if (err) {
      return console.log(`An error has occurred: ${err}`);
    }
    console.log("File was created successfully.");
  });
};

export const readFileAsync = async () => {
  await fs.readFile(resolvePath(), (err, data) => {
    if (err) {
      return console.log(`An error has occurred: ${err}`);
    } else {
      console.log(JSON.parse(data));
    }
    console.log("File was read successfully.");
  });
};

export const copyFileAsync = async () => {
  await fs.copyFile(resolvePath(), resolvePath("usersCopy.txt"), (err) => {
    if (err) {
      return console.log(`An error has occurred: ${err}`);
    }
    console.log("File was copied successfully.");
  });
};
