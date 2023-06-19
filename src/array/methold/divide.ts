function divide(this: any[], refence: number): Array<any[]> {
  const first = this.slice(0, refence);
  const second = this.slice(refence, -1);

  return [first, second];
}

Array.prototype.divide = divide;
