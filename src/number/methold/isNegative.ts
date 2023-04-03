/**
 * 
 * @param this this
 * @returns return boolean
 */

function isNegative(this: number): boolean {
    return this < 0
}

Number.prototype.isNegative = isNegative