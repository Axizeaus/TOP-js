function makeRangeIterator(start = 0, end = Infinity, step = 1){
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next(){
            let result;
            if (nextIndex < end){
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value : iterationCount, done: true}
        }
    };
    return rangeIterator
}

const it = makeRangeIterator(1, 10, 2);
let result = it.next();
while (!result.done){
    console.log(result.value);
    result = it.next();
}

// const it2 = makeRangeIterator(5,10,3);
// let result2 = it2.next();
// while (!result2.done){
//     console.log(result.value);
//     result = it2.next();
// }

console.log('iterated over the sequence of size: '+ result.value);
// console.log('iterated over the sequence of size: '+ result2.value);
