import {LeafNode, Node} from "../src/tree";

describe("Test arithmetic expression tree", () => {
    it("Should correctly create simple expression tree", () => {
        const tree = Node("+", Node("x", LeafNode(1), LeafNode(2)), LeafNode(3));
        expect(tree.result()).toBe(5);
        expect(tree.toString()).toBe("((1 x 2) + 3)")
    });

    it("Should correctly create leaf node", () => {
        const leaf = LeafNode(1);
        expect(leaf.result()).toBe(1);
        expect(leaf.toString()).toBe("1");
    });

    it("Creating node with null parameters should throw ", function () {
        expect(() => Node(null, null, null, null)).toThrow();
    });
});