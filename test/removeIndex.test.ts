import { removeIndex } from "../src/index"

it("removeIndex", () => {
    expect(removeIndex([1, 2, 3], 2)).toStrictEqual([1, 2])
    expect(removeIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toStrictEqual([1, 2, 3, 4, 5, 7, 8, 9])
})