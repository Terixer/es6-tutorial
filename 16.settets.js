class Circle {
    constructor(ourRadius) {
        this.ourRadius = ourRadius
    }
    get area() { return Math.PI * this.ourRadius * this.ourRadius }
    set radius(r) { this.ourRadius = r * 100 }
    get radius() { return this.ourRadius }
}
var c = new Circle(4)

console.log(c.radius)
c.radius = 6
console.log(c.radius)
