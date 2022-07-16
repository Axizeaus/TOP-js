let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

rabbit.walk();
rabbit.sleep();

console.log(rabbit.isSleeping); 
console.log(animal.isSleeping);
animal.sleep();
console.log(animal.isSleeping)