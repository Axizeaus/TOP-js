let salaries = {
  "John" : 100,
  "Pete" : 300,
  "Mary" : 200
}

function topSalary(salaries){
  let topSalary = 0;
  let topName = null;

  for (const [name, salary] of Object.entries(salaries)){
    if (topSalary < salary){
      topName = name;
      topSalary = salary;
    }
  }
  return topName
}