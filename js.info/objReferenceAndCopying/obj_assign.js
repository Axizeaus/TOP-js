let user = { name : 'John',
              size:{
                height: 180,
                weight: 65,
                
              },
             getHeight : () => {
                console.log(this.size.height)
              }}

let permission1 = { canCreate : true }
let permission2 = { isAdmin : true }

Object.assign(user, permission1, permission2)

console.log(user);
console.log(user.isAdmin);
console.log(user.canCreate);
console.log(user.name)

Object.assign(user, {name : "Larry"})
console.log(user)

let userClone = Object.assign({}, user, {name : 'James'})

console.log(userClone)
console.log(user === userClone)

user.size.height = 179;

console.log(user);
console.log(userClone);

let trueClone = structuredClone(user);
console.log(trueClone);
trueClone.name = 'John'
trueClone.size.height = 180;
trueClone.size.weight = 55;
console.log(trueClone);

