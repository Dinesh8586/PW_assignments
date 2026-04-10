function sumOfN(n){

    let sum = 0

    for (let i = 0; i<=n; i++){
        sum = sum+i
        
        console.log("i:", i, "sum;", sum)
    }
    return sum

}

let result = sumOfN(5);

console.log("Final Sum = ", result)