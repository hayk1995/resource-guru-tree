export type Operator = "+" | "-" | "x" | "÷";

const operatorDictionary: { [key in Operator]: (x: number, y: number) => number } = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "x": (x, y) => x * y,
    "÷": (x, y) => {
        if (y === 0) {
            throw new Error("Can not divide to zero");
        }
        return x / y;
    }
}

export const calculateBinaryOperator = (operator: Operator, x: number, y: number): number => {
    return operatorDictionary[operator](x, y);
}
