// Function to get and return the display and operation areas from the DOM
export const variables = () => {
  // Select the element with class "result-display" and cast it as an HTMLElement
  const displayArea = document.querySelector(".result-display") as HTMLElement;

  // Select the element with class "operation-display" and cast it as an HTMLElement
  const operationArea = document.querySelector(".operation-display") as HTMLElement;

  // Return an object containing the selected elements
  return {
    displayArea,
    operationArea,
  };
};
