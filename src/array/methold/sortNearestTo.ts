import { inverseNumber, isNegative, removeIndex } from '../../index.js'
import '../../injector.js'

/**
 *  sort Array of number nearest to an reference
 */
function sortNearestToProp(this: Array<any>, reference: number): Array<number> {

    if (typeof reference !== 'number') throw new Error(`Argument reference must be an number not an ${typeof reference}`)

    const length: number = this.length
    const result = []
    const difference = {
        diff: reference - this[0],
        index: 0
    }

    for (let boucle = 0; boucle < length; boucle++) {

        difference.diff = reference - this[0]
        difference.index = 0

        if (isNegative(difference.diff)) {
            difference.diff = inverseNumber(difference.diff)
        }

        for (let i = 0; i < this.length; i++) {
            let element = this[i]

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

        result.push(this[difference.index])
        this.replaceArray(removeIndex(this, difference.index))
    }

    this.push(...result)

    return this

}

Array.prototype.sortNearestTo = sortNearestToProp