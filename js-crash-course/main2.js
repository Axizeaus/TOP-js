// object literals

const person = {
    firstName : 'john',
    lastName : 'doe',
    age : 21,
    hobbies: ['this', 'feels', 'like', 'json'],
    address : {
        street : 'ventroloquist st.',
        city : 'green republic',
        state: 'alive'
    }
}

console.log(person);
console.log(person.hobbies[3]);
console.log(person.address.city);

const {firstName, lastName} = person;
console.log(firstName, lastName);

person.email = 'john@doe.com';
console.log(person);