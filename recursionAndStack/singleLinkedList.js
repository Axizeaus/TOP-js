let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function outputTheList(list) {
  console.log(list.value);

  if (list.next){
    outputTheList(list.next);
  }
}

function outputReverse(list) {
  if (list.next){
    outputReverse(list.next)
  }
  console.log(list.value);
}

outputTheList(list);
outputReverse(list);