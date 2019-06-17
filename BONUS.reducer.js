const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => {
        console.log("----------------")
        console.log("Akumulator :", accumulator)
        console.log("currentValue :", currentValue)
        console.log("----------------")
        return accumulator.concat(currentValue) //Musi zostać zwrócone aby zapisać do nowego akumulatora
    },
    //Akumulator zaczyna z tą tablica
    [
        999,
        777
    ]
);

console.log("END: ", array1);