interface Array<T> {
    removeIndex(this: Array<any>, index: number): Array<any>
    replaceArray(this: Array<any>, table: Array<any>): Array<any>
    sortNearestTo(this: Array<T>, reference: any): Array<number>
}