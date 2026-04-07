import { calculator } from "./calculator";

// // add function test

it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.add(5, 5)).toBe(10);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.add(12, 8)).toBe(20);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.add(-1, -5)).toBe(-6);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.add(4.5, 3.5)).toBe(8);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.add(-4.5, 3.5)).toBe(-1);
});

// // subtract function test

it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.subtract(3, 4)).toBe(-1);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.subtract(9, 5)).toBe(4);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

// divide function test

it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.divide(24, 8)).toBe(3);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.divide(11, 2)).toBe(5.5);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.divide(-8, 2)).toBe(-4);
});

// multiply function test

it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.multiply(-5, 10)).toBe(-50);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.multiply(-5, -10)).toBe(50);
});
it("Should take two numbers and return the correct calculation", () => {
  expect(calculator.multiply(2.5, 4)).toBe(10);
});
