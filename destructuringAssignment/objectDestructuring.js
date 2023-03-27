let options = {
  title: 'Menu',
  width: 100,
  height: 200
}

// let {width, title, height} = options;

// console.log(title, width, height)

// what : goes where
let {title: name, width: w, height: h} = options;
console.log(name, w, h);

let {title, width, height, weight=100} = options;
console.log(title, width, height, weight);

let {title: t, ...others} = options
console.log(t, others)