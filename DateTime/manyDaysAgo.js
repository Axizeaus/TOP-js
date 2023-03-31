function getDateAgo(date, days){
  let ans = date.setDate(date.getDate() - days);
  return new Date(ans);
}

console.log(getDateAgo(new Date(), 1))