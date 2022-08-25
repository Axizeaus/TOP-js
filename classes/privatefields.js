class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }

    info = () => {
        console.log(this.#height, this.#width)
    }
  }
  
let rec = new Rectangle(10, 5);
// console.log(rec.#height, rec.#width)
console.log(rec.height, rec.width);
rec.info();