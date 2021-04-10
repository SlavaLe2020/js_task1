function fib(n) {
    let a = 1;
    let b = 1;
    for(let seq = 3; seq <= n; seq++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(5));