interface Array<T> {
    removeIndex(this: Array<any>, index: number): Array<any>
    replaceArray(this: Array<any>, table: Array<any>): Array<any>
    sortNearestTo(this: Array<T>, reference: any): Array<number>
}

interface Number {
    inverseNumber(this: Number): number
    isNegative(this: Number): boolean
    equalTo(this: Number, number: number): boolean
}

interface Math {

    /**
     * @param number the number factoriel
     * @returns number
     */
    factoriel(number: number): number

    /**
     * @param array the array to sum
     * @returns number
     */
    sum(array: Array<number>): number

    /**
     * @param reference the reference find multiple of
     * @param table how many table check
     * @returns Array<number>
     */
    multiple(reference: number, table: number): Array<number>

    /**
     * @param x number
     * @returns number
     */
    sigmoide(x: number): number
}