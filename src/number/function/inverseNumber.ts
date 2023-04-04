/**
 * @param number 
 * @returns 
 */

export function inverseNumber(number: number): number {

    if (typeof number !== 'number') throw new Error(`Argument number must be an number not an ${typeof number}`)

    return number *= -1

}