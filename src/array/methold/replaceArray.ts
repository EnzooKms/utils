/**
 * replace current array by the argument array
 */

function replaceArray(this: Array<any>, table: Array<any>): Array<any> {
    const length = this.length

    if (!Array.isArray(table)) throw new Error(`Argument table must be an Array of any Array<any> not an ${typeof table}`);


    for (let i = 0; i < length; i++) {
        this.pop()
    }

    this.push(...table)

    return this

}

Array.prototype.replaceArray = replaceArray