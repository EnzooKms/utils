/**
 * 
 * @param this this number
 * @param number the number with check the equality
 * @returns 
 */

function equalTo(this: number, number: number): boolean {
    return this === number
}

Number.prototype.equalTo = equalTo