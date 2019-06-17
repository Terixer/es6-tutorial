class Circle {
    constructor(radius) {
        this.radius = radius
    }
    computeArea() {
        return Math.PI * this.radius * this.radius
    } //Deklaracja metody
}
var c = new Circle(4)
console.log(c.computeArea())
// returns: 50.26548245743669