import { variables } from "./variables";

export const updateDisplay = (e: Event): void => {
    const { displayArea } = variables();
    const target = e.target as HTMLElement;
    const displayValue = target.textContent ?? "";

    displayArea.textContent = displayArea.textContent === "0" ? displayValue : displayArea.textContent + displayValue;
};
