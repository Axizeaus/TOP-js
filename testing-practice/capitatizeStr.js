function capitalizeStr(str){
  let result = str.replace(/\b\w/g, (l) => l.toUpperCase());
  return result ;
}

capitalizeStr('this')

module.exports = capitalizeStr;