export function isNegative(number: number): boolean {

    if (typeof number !== 'number') throw new Error(`Argument number must be an number not an ${typeof number}`)

    return number < 0
}