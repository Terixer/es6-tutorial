//https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/


//ES5
var square = function (x) {
    return x * x;
}
//ES6 

const squareArrow = (x) => {
    return x * x
}

//ES6 Short Return

const squareArrowShort = x => x * x

const userCities = {
    name: 'Andrew',
    cities: ['Poznań', 'Wrocław', 'Kraków'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // TO TO SAMO CO


        // this.cities.forEach((city) => {
        //     this.name + ' has lived in ' + city
        // })
    }
}

console.log(userCities.printPlacesLived())