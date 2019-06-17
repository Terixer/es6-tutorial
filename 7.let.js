var b = 0; // zmienna globalna "b"
for (let a = 0; a < 10; a++) { // zmienna blokowa "a"
    b += a;
}

console.log(typeof b); // 45
console.log(typeof a); // undefined