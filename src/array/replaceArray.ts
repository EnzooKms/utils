interface Array<T> {
    replaceArray(this: Array<any>, table: Array<any>): Array<any>
}

/**
 * replace current array by the argument array
 */

function replaceArray(this: Array<any>, table: Array<any>): Array<any> {
    const length = this.length

    if (!Array.isArray(table)) {
        throw new Error("You must put in array at argument 0");

    }

    for (let i = 0; i < length; i++) {
        this.pop()
    }

    this.push(...table)

    return this

}

Array.prototype.replaceArray = replaceArray