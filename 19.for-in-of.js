let myArray = [1, 23, 44, 6234, 342, 34, 2, 34]


for (var index in myArray) {    // nie rób tego
    console.log(myArray[index]);
}



for (var value of myArray) {
    console.log(value);
}