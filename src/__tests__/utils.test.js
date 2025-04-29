const { isPalindrome } = require('../utils'); // Import the function to test

describe("isPalindrome", () => {
    it("should return true for a valid palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    it("should return false for a non-palindrome", () => {
        expect(isPalindrome("car")).toBe(false);
    });

    it("should return true for a palindrome with mixed case", () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    });

    it("should return false for an empty string", () => {
        expect(() => isPalindrome("")).toThrow("Input must contain only alphabetic characters");
    });

    it("should throw an error for input with non-alphabetic characters", () => {
        expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
    });

    it("should throw an error for input that is not a string", () => {
        expect(() => isPalindrome(123)).toThrow("Input must be a string");
    });

    it("should return true for a single character string", () => {
        expect(isPalindrome("a")).toBe(true);
    });

    it("should return true for a palindrome with spaces ignored", () => {
        expect(isPalindrome("a man a plan a canal panama")).toBe(true);
    });

    it("should return false for a string with spaces that is not a palindrome", () => {
        expect(isPalindrome("hello world")).toBe(false);
    });

    it("should return true for a palindrome with punctuation ignored", () => {
        expect(isPalindrome("Madam, I'm Adam")).toBe(true);
    });
});