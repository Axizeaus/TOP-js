let animal = {
    eats: true,
    smile() {
        console.log('smiling animal')
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}