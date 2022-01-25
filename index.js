class RomanNumerals {
  #romanNum = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  getRomanNum() {
    return this.#romanNum;
  }

  toRoman(value, arr = []) {
    for (let i = 0; i < value; i++) {
      if (value <= 3) {
        for (let i = 0; i < value; i++) {
          arr.push(
            Object.keys(this.getRomanNum()).find(
              (key) => this.getRomanNum()[key] == 1
            )
          );
        }
        return arr.join("");
      }
      if (value - 1000 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 1000
          )
        );
        value = value - 1000;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 900 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 900
          )
        );
        value = value - 900;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 500 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 500
          )
        );
        value = value - 500;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 400 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 400
          )
        );
        value = value - 400;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 100 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 100
          )
        );
        value = value - 100;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 90 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 90
          )
        );
        value = value - 90;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 50 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 50
          )
        );
        value = value - 50;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 40 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 40
          )
        );
        value = value - 40;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 10 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 10
          )
        );
        value = value - 10;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 9 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 9
          )
        );
        value = value - 9;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 5 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 5
          )
        );
        value = value - 5;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
      if (value - 4 >= 0) {
        arr.push(
          Object.keys(this.getRomanNum()).find(
            (key) => this.getRomanNum()[key] == 4
          )
        );
        value = value - 4;
        if (value != 0) {
          this.toRoman(value, arr);
        }
        break;
      }
    }
    return arr.join("");
  }
  /*----------------------------TODO------------------------------------ 
  
                          adding numbers correctly                         */
  toNumerals(key) {
    const splitted = key.split("");
    let numericArr = [];

    for (key of splitted) {
      numericArr.push(this.getRomanNum()[key]);
    }

    let addedNumericNumbers = numericArr.reduce(this.#getSum, 0);
    return addedNumericNumbers;
  }

  #getSum(total, num) {
    return total + Math.round(num);
  }

  static create() {
    return new RomanNumerals();
  }
}
