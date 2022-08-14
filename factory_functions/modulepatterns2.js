let myModule = (function(){
    'use strict';

    return {
        publicMethod : function(){
            console.log('hello world')
        }
    }
})();

myModule.publicMethod();

// 1. function is wrapped with a colosure like (() => {})()

let test = (function(){
    "use strict";
    return {fun : () => console.log('this is fun')}
})();
test.fun()

let arrow = (()=> {
    "use strict";
    return {shoot : () => console.log('wooooosh')}
})()
arrow.shoot();

let gun = (()=>{
    return {
        shoot : () => console.log('phew phew')
    }
})()

gun.shoot()