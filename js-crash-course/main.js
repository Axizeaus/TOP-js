console.log('hello world');

text = 'This is a text';
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.substring(0, 5));
console.log(text.split(' '))

const numbers = new Array(1,2,3);
console.log(numbers);

const langs = ['java', 'c', 'python', 'javascript'];
console.log(langs);
langs.push('rust', 'golang');
console.log(langs);

langs.unshift('c++', 'c#');
console.log(langs); 

let popped = langs.pop();
console.log(popped);
console.log(langs);

console.log(Array.isArray(langs));

console.log(langs.indexOf('java'));
inx = langs.indexOf('java');
console.log(langs[inx])