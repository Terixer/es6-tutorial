function mnozenie(...args) {
    let sum = 1;
    for (element of args) {
        sum *= element
    }
    return sum;
}

console.log(mnozenie(2, 4, 2, 51, 345, 234, 52, 36, 3, 26, 23));


// //easy


// const normal = (...args) => {
//     console.log(args)
// }

// normal(1, 2, 3, 4, 5, 6, 7, "ab", "cd")







// //medium
// var x = function (a, b, ...args) {
//     console.log("----------")
//     console.log("a =", a);
//     console.log("b =", a);
//     console.log("args", args);
//     console.log(args[0])
// }

// x(2, 3)
// // prints
// // a = 2, b = 3, 0 args left

// x(2, 3, 4, 5)
// // prints
// // a = 2, b = 3, 2 args left