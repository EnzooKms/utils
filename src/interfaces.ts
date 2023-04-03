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
    factoriel(number: number): number
}