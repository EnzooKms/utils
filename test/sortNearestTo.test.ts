import { sortNearestTo } from "../src/index";

it('sortNearestTo', () => {
    expect(sortNearestTo([3, 6, 5, 10], 5)).toEqual([5, 6, 3, 10])
    expect(sortNearestTo([8, 90, 6], 50)).toEqual([90, 8, 6])
    expect(sortNearestTo([-1, 10, 5], 1)).toEqual([-1, 5, 10])
    expect(sortNearestTo([-5, -9, -3, -4], 0)).toEqual([-3, -4, -5, -9])
})