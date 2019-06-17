var num = 0;

if (num === 0) {
    let inScopeTemp = 2;
    var globalTemp = 3;

    for (let i = 0; i < 0; i++) {
        num += (inScopeTemp + globalTemp) * 1;
    }

    console.log(typeof i); // undefined - poza zakresem
}

console.log(typeof inScopeTemp); // undefined - poza zakresem
console.log(typeof num); // number - zakres globalny
console.log(typeof globalTemp); // number - zakres globalny


const ABC = 12;
let EFG = 0;
EFG = ABC * 2; // ZADZIAŁA
ABC = EFG * 2; // NIE ZADZIAŁA
