/**
 * 
 * @param x number
 * @returns number
 */

export function sigmoide(x: number): number {
    return 1 / 1 + Math.exp(-x)
}