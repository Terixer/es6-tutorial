var module = {
    x: 42,
    getX: function () {
        return this.x;
    },
    getY: function () {
        return 20
    }
}
var unboundGetY = module.getY;
console.log("unboundGetY ", unboundGetY())
// expected output: 20

var unboundGetX = module.getX;
console.log("unboundGetX ", unboundGetX()); // The function gets invoked at the global scope
// expected output: ERROR

var boundGetX = unboundGetX.bind(module);
console.log("boundGetX ", boundGetX());
// expected output: 42

var NewObjectBoundGetX = module.getX.bind({ x: 30 });
console.log("NewObjectBoundGetX ", NewObjectBoundGetX());
// expected output: 30