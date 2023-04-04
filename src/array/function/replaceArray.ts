export function replaceArray(replace: Array<any>, table: Array<any>): Array<any> {
    const length = replace.length

    if (!Array.isArray(table)) throw new Error(`Argument table must be an Array of any Array<any> not an ${typeof table}`);


    if (!Array.isArray(replace)) throw new Error(`Argument replace must be an Array of any Array<any> not an ${typeof replace}`);


    for (let i = 0; i < length; i++) {
        replace.pop()
    }

    replace.push(...table)

    return replace

}