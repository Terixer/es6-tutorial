class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get area() {
        return Math.PI * this.radius * this.radius
    }
}
var c = new Circle(4)
// returns: Circle {radius: 4}


c.area //Tutaj pobieramy getter
// returns: 50.26548245743669