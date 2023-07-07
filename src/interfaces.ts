interface Array<T> {
  removeIndex(this: Array<any>, index: number): Array<any>;
  replaceArray(this: Array<any>, table: Array<any>): Array<any>;
  sortNearestTo(this: Array<T>, reference: any): Array<number>;

  /**
   * splits an array into 2
   * @param {any[]} array
   * @param {number} refence
   * @return {Array<any[]>}
   */

  divide(this: any[], refence: number): Array<any[]>;

  /**
   * flat an array to 0 level
   * @param {Array<any[] & any>} this the array to fully flat
   * @return {any[]}
   */
  toFlat(this: Array<any[] & any>): Array<any>;
}

interface Number {
  inverseNumber(this: Number): number;
  isNegative(this: Number): boolean;
  equalTo(this: Number, number: number): boolean;
}

interface Math {
  /**
   * @param number the number factoriel
   * @returns number
   */
  factoriel(number: number): number;

  /**
   * @param array the array to sum
   * @returns number
   */
  sum(array: Array<number>): number;

  /**
   * @param reference the reference find multiple of
   * @param table how many table check
   * @returns Array<number>
   */
  multiple(reference: number, table: number): Array<number>;

  /**
   * @param x number
   * @returns number
   */
  sigmoide(x: number): number;

  /**
   * get the medianne
   * @param {any[]} array
   * @return {number}
   */
  medianne(array: any[]): number;
}
