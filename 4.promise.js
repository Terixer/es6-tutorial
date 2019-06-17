// setTimeout(() => {
//     console.log('robię coś...'); //2. w kolejności
// }, 1500);
// console.log('a teraz robię coś jeszcze')  //1. w kolejności 

// const promiseWZmiennej = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('robię coś...');
//         resolve();
//     }, 1500);
// });

// promiseWZmiennej.then(() => {
//     console.log('a teraz robię coś jeszcze')
// });



//1. w kolejności
function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('robię coś...');
            resolve();
        }, 1500);
    });
}
//2. w kolejności
doSomething().then(() => {
    console.log('a teraz robię coś jeszcze')
});



