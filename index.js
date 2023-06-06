import { USERS } from "./data/data.js";
import * as system from "./files/system.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const menuOptions = "1- Write file 2- Read file 3- Copy file 4- Exit ";
const readOptions = Number(prompt(menuOptions));

switch (readOptions) {
  case 1:
    system.writeFileAsync(USERS);
    break;
  case 2:
    system.readFileAsync();
    break;
  case 3:
    system.copyFileAsync();
    break;
  default:
    false;
}
