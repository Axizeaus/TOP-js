const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div
    }
})();

console.log(
    calculator.add(1,2),
    calculator.sub(1,-1),
    calculator.mul(12,12),
    calculator.div(1000, 5)
)