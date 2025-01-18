export const variables = () => {
  const displayArea = document.querySelector(".result-display") as HTMLElement;
  const operationArea = document.querySelector(".operation-display") as HTMLElement;

  return {
    displayArea,
    operationArea,
  };
};
