/**
 * remove index from a array
 */

function removeIndex(this: Array<any>, index: number): Array<any> {

    const array = this
    const result: Array<any> = []

    for (let i = 0; i < index; i++) {
        result.push(array[i])
    }

    for (let i = index + 1; i < array.length; i++) {
        result.push(array[i])
    }

    return result
}

Array.prototype.removeIndex = removeIndex
