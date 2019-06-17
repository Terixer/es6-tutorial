// ECMAScript 6
const PI = 3.141593

// ECMAScript 5
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value: 3.141593,
    enumerable: true,
    writable: false,
    configurable: false
})

// Wynik console.log(PI++) dla dwóch wersji
"TypeError: Assignment to constant variable."





