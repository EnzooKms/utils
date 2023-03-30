export function replaceArray(replace: Array<any>, table: Array<any>): Array<any> {
    const length = replace.length

    if (!Array.isArray(table)) {
        throw new Error("You must put in array at argument 0");

    }

    for (let i = 0; i < length; i++) {
        replace.pop()
    }

    replace.push(...table)

    return replace

}