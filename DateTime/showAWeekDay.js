let date = new Date(2012, 0, 3)
console.log( getWeekDay(date) );
console.log( getWeekDay(new Date()) );

function getWeekDay(date) {

  let day = date.getDay();
  switch (day) {
    case 0:
      return "SU"
      break;
    case 1:
      return "MO";
      break ;       
    case 2:
      return 'TU';
      break ;     
    case 3:
      return 'WE';
      break ;     
    case 4:
      return 'TH';
      break;      
    case 5:
      return 'FR';
      break;    
    case 6:
      return 'SA';
      break;
  }
}
