class Car {
    constructor(name, years) { // konstruktor
        this.name = name
        this.years = years
    }

    getYears() {
        return this.years;
    }
}

var dadsCar = new Car('Fiat', 20);
console.log(dadsCar);
console.log(dadsCar.getYears())




class FamilyCar extends Car { // dziedziczenie
    constructor(name, years, maxSpeed) {
        super(name, years); // wywołanie bazowego konstruktora
        this.maxSpeed = maxSpeed;
    }
}

var momsCar = new FamilyCar('Volvo', 10, 120);
console.log(familyCar)