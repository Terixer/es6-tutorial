// generatory jako procesy, których wykonanie można pauzować oraz wznawiać
// Do ich definiowania służy specjalny “keyword”: function* (funkcja z gwiazdką)




//easy

// Prostą funkcję generatora, której jedynym zadaniem jest wyświetlenie tekstu na ekranie.
// function* generator() {
//     console.log('gen');
// }
// /* Funkcję generatora można normalnie wywoływać, a jej wynik najlepiej przypisać do zmiennej/stałej (nawet jeśli nie użyliśmy return):
//  Robimy tak dlatego, że wywołanie funkcji generatora nie powoduje wykonania ciała tej funkcji. 
// Zamiast tego, wywołanie generatora zwraca obiekt tak zwanego iteratora.
// */
// const iterator = generator();

// //Do kontrolowania procesu służy funkcja "next()" robiona na iteratorze
// iterator.next(); // dopiero teraz wyświetli "gen"

//Korzystając z analogii, którą zaproponował Rauschmayer: utworzono proces, który na początku jest “spauzowany”, a następnie go wznowiono (za pomocą wywołania next()) i wykonano w całości.
//  Ok, ale co z pauzowaniem?







//medium

//Jeśli metoda next() wznawia wykonanie ciała funkcji generatora, to polecenie yield je wstrzymuje. Zresztą spójrz na modyfikację powyższego przykładu:


// function* generator() {
//     //1. START
//     console.log('gen');

//     yield;
//     //1. END

//     //2. START
//     console.log('erator');
//     //2. END

// }

// function* generator() {
//     console.log('gen');
//     yield;
//     console.log('erator');
//     yield;
//     console.log("test");
// }

// const iterator = generator();

// iterator.next(); // dopiero teraz wyświetli "gen"
// console.log("[][][][][][][]");
// iterator.next(); // pójdzie dalej i wyświetli "erator"
// console.log("[][][][][][][]");
// iterator.next(); // pójdzie dalej i wyświetli "test"



//medium++


// function* generator() {
//     //1. START
//     console.log('gen');
//     yield [142, 23, 5123]; //Yield może zwracać dowolną informację
//     //1. END

//     //2. START
//     console.log('erator');
//     //2. END

// }

// const iterator = generator();

// const nextRes1 = iterator.next(); //Zapisujemy bierzący stan iteratora do zmiennej
// const nextRes2 = iterator.next();

// console.log(nextRes1);
// console.log(nextRes2);









// medium++ AND return


// function* generator() {
//     console.log('dec');
//     yield 'test';
//     console.log('orator');
//     return 'end!';
// }

// const iterator = generator();

// const nextRes1 = iterator.next();
// const nextRes2 = iterator.next();

// console.log(nextRes1);
// console.log(nextRes2);









//semi-hard
// function* personInfo() {
//     person = {
//         name: "Kamil",
//         age: 23,
//         hobby: "Jumping"
//     }

//     console.log("TUTAJ PRZETWARZAMY IMIE");
//     yield person.name

//     console.log("TUTAJ PRZETWARZAMY WIEK");
//     yield person.age

//     console.log("TUTAJ PRZETWARZAMY HOBBY");
//     yield person.hobby
// }


// const personIterator = personInfo();


// const imie = personIterator.next().value;
// console.log(imie)

// const age = personIterator.next().value;
// console.log(age)

// const hobby = personIterator.next().value;
// console.log(hobby)


// console.log("----------------")
// console.log(`${imie} ma ${age} i lubi ${hobby}`)









// //semi-hard++
// function* personInfo(obj) {

//     console.log("TUTAJ PRZETWARZAMY IMIE");
//     yield obj.name

//     console.log("TUTAJ PRZETWARZAMY WIEK");
//     yield obj.age

//     console.log("TUTAJ PRZETWARZAMY HOBBY");
//     yield obj.hobby
// }

// const person1 = {
//     name: "Kamil",
//     age: 23,
//     hobby: "Jumping"
// }


// const personIterator1 = personInfo(person1);

// const imie1 = personIterator1.next().value;
// console.log(imie1)


// const person2 = {
//     name: "Tomek",
//     age: 1000,
//     hobby: "NIC"
// }

// const personIterator2 = personInfo(person2);

// const imie2 = personIterator2.next().value;
// console.log(imie2)

// const age2 = personIterator2.next().value;
// console.log(age2)








// // hard
// function* robot(imie) {
//     yield `Witaj ${imie}!`;
//     yield `Witaj ponownie ${imie}!`;
//     return `Do zobaczenia!`;
// }
// var proces = robot("Bartek");

// console.log("1. proces.next().value - ", proces.next().value)
// // console.log("1. proces.next() - ", proces.next())
// // console.log("1. proces - ", proces)

// console.log("2. proces.next().value - ", proces.next().value)
// // console.log("2. proces.next() - ", proces.next())
// // console.log("2. proces - ", proces)

// console.log("3. proces.next().value - ", proces.next().value)
// // console.log("3. proces.next() - ", proces.next())
// // console.log("3. proces - ", proces)

// console.log("4. proces.next().value - ", proces.next().value)
// // console.log("4. proces.next() - ", proces.next())
// // console.log("4. proces - ", proces)







//HARD++


// function* robot(imie) {
//     yield `Witaj ${imie}!`;
//     yield `Witaj ponownie ${imie}!`;
//     yield `Do zobaczenia!`;
//     return `NIC` //Nie wyświetli w pętli for-of  (bo to return) 
// }

// const przywitania = robot("Tomasz");

// for (jednoPrzywitanie of przywitania) {
//     console.log(jednoPrzywitanie);
// }







//ultimate

// function* generator() {
//     for (let i = 0; i < 10; i++) {
//         console.log("GENERATOR TRZYMA i które wynosi " + i)
//         yield `WEWNĄTRZ GENERATORA ${i}`;
//     }
// }

// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());








//SUPER ULTIMATE

// function* generator() {
//     //TO JEST FOR OD LICZENIA OD 0 DO 10
//     for (let i = 0; i < 10; i++) {
//         console.log("GENERATOR TRZYMA i które wynosi " + i)
//         yield `WEWNĄTRZ GENERATORA ${i}`;
//     }
// }

// const iterator = generator();
// // TO JEST FOR OF OD WYŚWIETLANIA ELEMENTÓW
// for (const item of iterator) {
//     console.log("TUTAJ JEST PĘTLA DLA ITERATORA")
//     console.log(item);
// }








//badASS

/* Obiekt zwracany przez generator, oprócz tego, że jest “iterowalny” może też być “obserwowalny”.
Polecenie yield potrafi bowiem również przyjmować wartości przekazane do generatora jako parametr wywołania metody next() */

// function* generator() {
//     while (true) {
//         const val = yield; // pobranie wartości przekazanej przez 'next'
//         console.log(`TO JEST W VALUE - ${val}`);
//     }
// }

// const observer = generator();

// observer.next("BH"); // uruchamia obserwator
// observer.next('BANAN');
// observer.next('KAWIOR');


/* Tym razem przeanalizujmy przykład trochę od końca.
Jak widzisz, mamy tutaj trzy wywołania metody next().
Pierwsze z nich opisane jest jako to, które uruchamia “obserwatora”.
Działa to bowiem tak: pierwsze wywołanie next() wykonuje kod funkcji
generatora od początku aż do pierwszego wystąpienia polecenia yield i na tym kończy.
Dopiero drugie wywołanie next() powoduje wykonanie kodu od tego miejsca, aż do kolejnego polecenia yield itd. */

/*
W naszym przykładzie zadziała więc to tak:
pierwsze next() uruchamia pętlę, ale już nie wykonuje kodu od linii trzeciej włącznie.
Nawet jeśli przekazalibyśmy do generatora jakąś wartość poprzez parametr metody next() to został by on zignorowany.
Kolejne wywołanie next(), tym razem z parametrem, powoduje przekazanie wartości tego parametru
do generatora poprzez yield. Wartość ta jest następnie, w trzeciej linii przykładu,
przypisywana do stałej val, a kod wykonuje się dalej, wyświetlając tę wartość na konsoli.
Następnie rozpoczyna się kolejna iteracja pętli, która znów zatrzymuje się na
poleceniu yield (ale linia ta już się nie wykonuje). Kolejne wywołanie next()
znów powoduje przypisanie wartości parametru i wykonanie reszty kodu, itd.
*/

//Najbardziej oczywistą sytuacją wydaje się wykorzystanie generatorów przy pobieraniu danych asynchronicznych