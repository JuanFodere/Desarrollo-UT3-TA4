function sumAll(num1, num2){
    let suma = 0
    while(num1 <= num2){
        suma += num1
        num1 ++
    }
    console.log(suma)
}

sumAll(2, 5)