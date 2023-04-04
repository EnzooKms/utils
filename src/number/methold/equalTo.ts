/**
 * 
 * @param this this number
 * @param number the number with check the equality
 * @returns 
 */

function equalTo(this: number, number: number): boolean {

    if (typeof number !== 'number') throw new Error(`Argument number must be an number not an ${typeof number}`);

    return this === number
}

Number.prototype.equalTo = equalTo