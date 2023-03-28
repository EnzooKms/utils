export function sortNearestTo(table: Array<number>, reference: number) {
    const array = table
    const result = []
    const difference = {
        diff: array[0],
        index: 0
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        if (reference - element < difference.diff) {
            difference.diff = reference - element
            difference.index = i
        }

    }

    result.push(array[difference.index])
    const newArray = []

}