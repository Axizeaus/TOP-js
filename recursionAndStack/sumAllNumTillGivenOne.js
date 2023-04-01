function sumTo(n, total = 0) {
  if (n == 0) {
    return total;
  } else {
    total += n;
    return sumTo(n - 1, total);
  }
}

console.log(sumTo(1000))