let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, item) {
  for (let key in obj){
    if((typeof obj[key]) === 'object'){
      return contains(obj[key], item)
    }

    if(obj[key] === item){
      return true;
    }
  }
  return false;
}