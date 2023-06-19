/**
 * splits an array into 2
 * @param {any[]} array
 * @param {number} refence
 * @return {Array<any[]>}
 */

export function divide(array: any[], refence: number): Array<any[]> {
  const first = array.slice(0, refence);
  const second = array.slice(refence, -1);

  return [first, second];
}
