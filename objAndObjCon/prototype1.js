let animal = {
    eats : true,
    sleepFunc : () => {
        console.log('animal sleeps')
    }
};
let rabbit = {
    __proto__ : animal, 
    jumps : true,
    jumpFunc : (n) => {
        for (let i = 0; i < n; i++){
            console.log('hop')
        }
    },
    sleepFunc : () => {
        console.log('rabbit sleeps')
    }
}

console.log(rabbit.eats)
console.log(rabbit.jumps)
rabbit.jumpFunc(3)
rabbit.sleepFunc()