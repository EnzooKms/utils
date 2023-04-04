/**
 * @param number the number factoriel
 * @returns 
 */

export function factoriel(number: number): number {

    if (typeof number !== 'number') throw new Error(`Argument number must be an number not an ${typeof number}`);


    let result = 1

    for (let i = 1; i <= number; i++) {
        result *= i
    }

    return result

}