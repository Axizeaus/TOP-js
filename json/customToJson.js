let room = {
  number : 23,
  // sorta like toString but for json
  toJSON() {
    return 'this is json format supposed to be';
  }
}

let meetup = {
  title : "fondle",
  date : new Date(Date.UTC(2022, 5, 10)),
  room
}

console.log(JSON.stringify(meetup, null, '=='))