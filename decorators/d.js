function slow(x){
  // imagine this is a cpu intensive one.
  return x
}

function cachingDecor(func){
  let cache = new Map()

  return function(x){
    if (cache.has(x)) {
      // if it is cached, it shall be returned
      return cache.get(x);
    }
    let result = func(x);

    // if it isn't cached, we cache
    cache.set(x, result);
    return result
  }
}