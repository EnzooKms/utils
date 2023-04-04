/**
 * 
 * @param number the number to be equal to
 * @param equalTo  the number with verify equality
 * @returns 
 */

export function equalTo(number: number, equalTo: number): boolean {

    if (typeof number !== 'number') throw new Error(`Argument number must be an number not an ${typeof number}`);
    if (typeof equalTo !== 'number') throw new Error(`Argument equalTo must be an number not an ${typeof equalTo}`)

    return number === equalTo
}