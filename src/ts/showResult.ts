import { getResult } from "./getResult";

export const showResult = () => {
  const resultButton = document.querySelector(".equal") as HTMLButtonElement;
  resultButton.addEventListener("click", () => getResult());
};
