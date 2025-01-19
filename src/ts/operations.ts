// Define an object `operations` that contains basic arithmetic operations
export const operations = {
  // Addition operation: takes two numbers and returns their sum
  add: (a: number, b: number) => a + b,

  // Subtraction operation: takes two numbers and returns their difference
  subtract: (a: number, b: number) => a - b,

  // Multiplication operation: takes two numbers and returns their product
  multiply: (a: number, b: number) => a * b,

  // Division operation: takes two numbers and returns their quotient
  // Note: This does not handle division by zero , we handle division by zero in the switch in the operate module
  divide: (a: number, b: number) => a / b,
};
