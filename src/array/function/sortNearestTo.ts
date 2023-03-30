import { inverseNumber, isNegative, removeIndex } from '../../index'
import '../../injector'


export function sortNearestTo(table: Array<any>, reference: number): Array<number> {
    const length: number = table.length
    const result = []
    const difference = {
        diff: reference - table[0],
        index: 0
    }

    for (let boucle = 0; boucle < length; boucle++) {

        difference.diff = reference - table[0]
        difference.index = 0

        if (isNegative(difference.diff)) {
            difference.diff = inverseNumber(difference.diff)
        }

        for (let i = 0; i < table.length; i++) {
            let element = table[i]

            if (isNegative(element)) {
                element = inverseNumber(element)
            }

            let diff: number = reference - element

            if (isNegative(diff)) {
                diff = inverseNumber(diff)
            }

            if (diff < difference.diff) {
                difference.diff = diff
                difference.index = i
            }

        }

        result.push(table[difference.index])
        table.replaceArray(removeIndex(table, difference.index))
    }

    table.push(...result)

    return table

}