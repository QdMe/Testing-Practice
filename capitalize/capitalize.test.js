import { capitalize } from "./capitalize";

// Test #1
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize("hi")).toBe("Hi");
});
// Test #2
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize("good")).toBe("Good");
});
// Test #3
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize("bye")).toBe("Bye");
});
// Test #4
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize(" fine")).toBe("Fine");
});
// Test #5
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize("Watch")).toBe("Watch");
});

// Test #6
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize("#admin")).toBe("#Admin");
});

// Test #7
it("Should take a string a capitalize the first letter", () => {
  expect(capitalize("hello, it's me")).toBe("Hello, it's me");
});
