let myModule = (
    () => {
        "use strict";
        let _private = 'Golden apple';
        let publicProperty = 'This is a public property';
        
        function _privateMethod() {
            console.log('this is private method');
            console.log('this is calling ' + _private + ' variable')
        }
        return {
            publicMethod: ()=>{
                _privateMethod();
            },
            publicProperty: publicProperty
        }
    }
)();

console.log(myModule); // this is an object
console.log(myModule._private); // undefined
try {
    myModule._privateMethod()
} catch (error) {
    console.log("Couldn't access private method")
} 
myModule.publicMethod();
console.log(myModule.publicProperty);