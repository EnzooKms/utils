/**
 * transform current number to opposite number
 */

function inverseNumber(this: number): number {
    let arg = this
    return arg *= -1

}

Number.prototype.inverseNumber = inverseNumber