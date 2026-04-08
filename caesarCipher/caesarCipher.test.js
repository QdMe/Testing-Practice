import { caesarCipher } from "./caesarCipher";

test("Ciphers a string using a caesar-cipher encryption givin a shift factor ", () => {
  expect(caesarCipher("bee", 1)).toBe("cff");
});
test("Ciphers a string using a caesar-cipher encryption givin a shift factor ", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("Ciphers a string using a caesar-cipher encryption givin a shift factor ", () => {
  expect(caesarCipher("Love", 15)).toBe("Adkt");
});
test("Ciphers a string using a caesar-cipher encryption givin a shift factor ", () => {
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
});
test("Ciphers a string using a caesar-cipher encryption givin a shift factor ", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
