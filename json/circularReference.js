let room = {
  number: 23
}

let meetup = {
  title : "Conference",
  participation : [
    {
      name : "John"
    }, 
    {
      name : "Alice"
    }
  ],
  place : room
}

room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, ['title', 'place', 'participation', 'name', 'number']))

const exceptOccupied = JSON.stringify(meetup, function replacer(key, value){
  console.log(key +'==>'+ value);
  return (key === 'occupiedBy') ? undefined : value;
})

console.log(exceptOccupied);