/**
 * remove index from a array
 */
export function removeIndex(table: Array<any>, index: number) {

    if (!Array.isArray(table)) throw new Error(`Argument table must be an Array of any Array<any> not ${typeof table}`);
    if (typeof index !== 'number') throw new Error(`Argument index must be an number not an ${typeof index}`)


    const array = table
    const result: Array<any> = []

    for (let i = 0; i < index; i++) {
        result.push(array[i])
    }

    for (let i = index + 1; i < array.length; i++) {
        result.push(array[i])
    }

    return result
}
