import { reversString } from "./reverseString";

it("Should take a string and return the reverse of it", () => {
  expect(reversString("hi")).toBe("ih");
});
it("Should take a string and return the reverse of it", () => {
  expect(reversString("hello")).toBe("olleh");
});
it("Should take a string and return the reverse of it", () => {
  expect(reversString("car")).toBe("rac");
});
