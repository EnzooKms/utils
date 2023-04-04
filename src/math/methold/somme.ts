function sum(array: Array<number>): number {
    let result: number = 0

    for (const number of array) {

        if (typeof number !== 'number') throw new Error(`Argument array must be an Array of number Array<number> not an ${typeof array}`);

        result += number
    }

    return result

}

Math.sum = sum