function getLastDayOfMonth(year, month){
  let date = new Date(year, month + 1, 0);
  return date.getDate()
}

console.log(getLastDayOfMonth(2023, 0))
console.log(getLastDayOfMonth(2023, 1))
console.log(getLastDayOfMonth(2023, 3))
console.log(getLastDayOfMonth(2023, 2))