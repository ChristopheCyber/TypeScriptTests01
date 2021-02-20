function Factoriel(n: number): number {
    var res = 1, res1 = 1;
    var j = 1;
    for (let index = 0; index < n; index++) {
        res1 = (res1 * index);
        console.log('index=', index, '2*index=', 2 * index, '; res1=', res1);
        res = res * j;
        j++;
        console.log('j =', j, '; res=', res);
    }
    console.log('Factorial(', n, ')=', res);
    return res;
}
Factoriel(5);