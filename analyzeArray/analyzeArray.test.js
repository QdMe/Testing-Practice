import { analyzeArray } from "./analyzeArray";

test("takes an array of num and returns an obj of (average, min, max, and length)", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
test("takes an array of num and returns an obj of (average, min, max, and length)", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
test("takes an array of num and returns an obj of (average, min, max, and length)", () => {
  expect(analyzeArray([2, 4, 8, 16, 32])).toEqual({
    average: 12.4,
    min: 2,
    max: 32,
    length: 5,
  });
});
