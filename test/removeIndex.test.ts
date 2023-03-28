import { removeIndex } from "../src/index"

test("test", () => {
    expect(removeIndex([1, 2, 3], 2)).toStrictEqual([1, 2])
})