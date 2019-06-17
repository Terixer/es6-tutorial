const klient = { imie: "Bartek" }
const koszyk = { ilosc: 7, cena: 130.50 }

// ECMAScript 6
const wiadomosc1 = `Witaj ${klient.imie}!
Przed chwila kupiłeś ${koszyk.ilosc} produktów o łącznej kwocie ${koszyk.cena.toFixed(2)}zl.`

// ECMAScript 5
// var wiadomosc2 = "Witaj " + klient.imie + "!\n" +
//     "Przed chwila kupiles " + koszyk.ilosc + " produktów o łącznej kwocie " + koszyk.cena.toFixed(2) + "zl.";



console.log(wiadomosc1)
// console.log(wiadomosc2)