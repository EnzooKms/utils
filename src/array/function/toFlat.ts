/**
 * flat an array to 0 level
 * @param arr the array to fully flat
 * @return {any[]}
 */

export function toFlat(arr: Array<any[] | any>): any[] {
  const res: Array<any[] & any> = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      res.push(...element);
    } else {
      res.push(element);
    }
  }

  let isFlat: boolean = true;
  for (const el of res) {
    if (Array.isArray(el)) {
      isFlat = false;
      break;
    }
  }

  if (isFlat) {
    return res;
  } else {
    return toFlat(res);
  }
}
