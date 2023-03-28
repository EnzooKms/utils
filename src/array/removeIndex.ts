/**
 * remove index from a array
 */
export function removeIndex(table: Array<any>, index: number) {

    const array = table
    const result = []

    for (let i = 0; i < index; i++) {
        result.push(array[i])
    }

    for (let i = index + 1; i < array.length; i++) {
        result.push(array[i])
    }

    return result
}
