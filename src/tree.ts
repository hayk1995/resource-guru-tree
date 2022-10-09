import {strictEqual} from 'assert';
import {calculateBinaryOperator, Operator} from "./calculate-binary-operator";

export type Node = {
    operator: Operator | null,
    value: number | null,
    left: Node | null,
    right: Node | null,
    result: () => number,
    toString: () => string
}

export const Node = (operator: Operator | null, left: Node | null, right: Node | null, val?: number | null) => {
    if (val != null) {
        return {
            operator: null,
            left: null,
            right: null,
            value: val,
            result: () => val,
            toString: () => val.toString()
        }
    }

    if (operator == null || left == null || right == null) {
        throw new TypeError(`Operator,left,right of parent node can not be null received ${operator} ${left} ${right}`);
    }

    return {
        operator,
        left,
        right,
        value: null,
        result: () => calculateBinaryOperator(operator as Operator, left.result(), right.result()),
        toString: () => `(${left.toString()} ${operator} ${right.toString()})`
    }

}

export const LeafNode = (val: number) => Node(null, null, null, val);

const tree = Node(
    "÷",
    Node(
        "+",
        LeafNode(7),
        Node(
            "x",
            Node("-", LeafNode(3), LeafNode(2)),
            LeafNode(5)
        )
    ),
    LeafNode(6)
);


strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());