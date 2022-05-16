const myObj = {
    property : 'Value',
    anotherProperty : 10, 
    "function one" : () => {
        // do stuff!
    },
    functiontwo : () => {
        // do more stuffs!
    }
}

console.log(myObj.property);
console.log(myObj[anotherProperty]);
console.log(myObj.functiontwo);
console.log(myObj["function one"]);