//Stara wersja

var result,
    numbers = [6, 4, 2, 1, 8];

result = numbers.map(function (x) {
    console.log(x)
    return x * 2;
});

setTimeout(function () {
    result = 'wynik: ' + result;
    console.log(result);
}, 1000);



















//ES6


var result,
    numbers = [1, 2, 3, 4, 5];

result = numbers.map(x => x + x);

setTimeout(() => {
    result = 'wynik: ' + result;
    console.log(result);
}, 2000);