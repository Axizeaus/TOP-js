function merge(left, right) {
  // this function is for already sorted two arrays, left and right.
  let arr = [];
  // Break out of the loop once any of the array is empty
  while (left.length && right.length){
    // left and right first elements cuz the smaller one will be chopped off later on.
    if (left[0] < right[0]){
      // takes out the first element of the left and push that to arr
      arr.push(left.shift())
    } else {
      // takes out the first element of the right and push that to arr
      arr.push(right.shift())
    }

    // sort of like chopping off the parts that satisfies the requirement.
  }

  // join them back into a single array 
  // lest any of the left or right still have value (rremember the while loop above )
  return [...arr,...left,...right]
}

function mergeSort(array){
  // get the mid point
  const half = array.length / 2;

  // Base case 
  if (array.length < 2){
    return array
  }

  // if array is odd numbered, the left one gets smaller one
  const left = array.splice(0, half)
  // now left is 0 till half and array is modified
  return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort([1,5,6,7,3,5,6,2,5,6,8]))