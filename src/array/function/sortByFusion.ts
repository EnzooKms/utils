import "../../injector.js";

export function sortByFusion(array: any[]) {
  if (!array) {
    throw new Error('Need "array" arguments');
  }

  if (!Array.isArray(array)) {
    throw new Error('Arguments "array" need to be an array');
  }

  if (array.length < 2) {
    return array;
  }

  if (array.length > 1) {
    const medianne: number = Math.medianne(array);
    const left: number[] = sortByFusion(array.divide(medianne)[0]);
    const right: number[] = sortByFusion(array.divide(medianne)[1]);

    sortByFusion(left);
    sortByFusion(right);

    return fusion(array, left, right);
  }

  return []; /** idk */
}

function fusion(array: number[], left: number[], right: number[]) {
  let i = 0,
    j = 0,
    k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[i]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  return array;
}

/** https://qkzk.xyz/docs/nsi/cours_terminale/algorithmique/diviser_pour_regner/tri_fusion/ */
