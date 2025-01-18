import { operate } from "./operate";
import { variables } from "./variables";

export const getResult = () => {
  const { displayArea, operationArea } = variables();
  const result = displayArea.textContent;
  operationArea.textContent = result;
  const rest: string[] = result.split("");
  let index: number;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === ".") {
      console.log("this is a comma");
    } else if (isNaN(Number(rest[i]))) {
      index = i;
    }
  }
  let first = "";
  let second = "";
  for (let i = 0; i < index; i++) {
    first += rest[i];
  }
  for (let i = index + 1; i < rest.length; i++) {
    second += rest[i];
  }
  operate(rest[index], first, second);
};
