let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function (key, value) {
  return (key == "date") ? new Date(value) : value;
});

console.log(meetup.date.getDate())