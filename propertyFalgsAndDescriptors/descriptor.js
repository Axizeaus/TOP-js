let user = {
}

Object.defineProperty(user, 'name', {
  value : 'satan',
  writable : false,
  configurable: true,
  enumerable: true,
})

user.name = 'James'

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

console.log( JSON.stringify(descriptor, null, 2))