/**
 * @param reference the reference find multiple of
 * @param table how many table check
 * @returns Array<number>
 */

export function multiple(reference: number, table: number): Array<number> {

    if (!reference) {
        throw new Error(`need reference arguments`)
    }

    if (!table) {
        throw new Error(`need table arguments`)
    }

    const result: Array<number> = []

    for (let i = 1; i <= table; i++) {

        if (Number.isInteger(i * reference)) {
            result.push(i)
        }

    }

    return result
}