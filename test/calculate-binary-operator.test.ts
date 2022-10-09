import {calculateBinaryOperator} from "../src/calculate-binary-operator";

describe("Test calculation of binary operators", () => {
    it("Should sum two values", () => {
        expect(calculateBinaryOperator("+", 2, 3)).toBe(5);
    });

    it("Should extract two values", () => {
        expect(calculateBinaryOperator("-", 10, 3)).toBe(7);
    });

    it("Should multiply two values", () => {
        expect(calculateBinaryOperator("x", 3, 3)).toBe(9);
    });

    it("Should divide two values", () => {
        expect(calculateBinaryOperator("÷", 6, 3)).toBe(2);
    });

    it("Should throw error when dividing to zero", () => {
        expect(() => calculateBinaryOperator("÷", 6, 0)).toThrow("Can not divide to zero");
    });
});