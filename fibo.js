function fibo(n) {
    if (n <= 1) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}
n=10;
for(let i=0; i<n; i++){
    console.log(fibo(i));
};