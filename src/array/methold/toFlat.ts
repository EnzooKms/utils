function toFlat(this: Array<any[] | any>): any[] {
  const res: Array<any[] & any> = [];

  for (const element of this) {
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

  const length = this.length;
  for (let i = 0; i < length; i++) {
    this.pop();
  }

  this.push(...res);

  if (isFlat) {
    return this;
  } else {
    return this.toFlat();
  }
}

Array.prototype.toFlat = toFlat;
