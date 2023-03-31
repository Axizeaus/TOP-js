let room = {
  number : 505
}

let meetup = {
  title : "this is title",
  occupied : [
    {
      name : 'Mary'
    },
    {
      name : 'Josh'
    }
  ],
  place : room
}

room.occupied = meetup
meetup.self = meetup

console.log( JSON.stringify(meetup, function replacer(key, value){
  if (key === 'occupied') return undefined;
  if (key === 'self') return undefined;
  return value;
}))