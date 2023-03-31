function getSecondToday(){
  let start = new Date();
  start.setHours(0,0,0,0);
  let now = new Date();
  console.log((now - start) / 1000);
}

getSecondToday()