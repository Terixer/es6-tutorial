class Person {
    constructor(name, age = 0) {
        this.name = name
        this.age = age
    }
    getGreting() {
        return `Hi! ${this.name}. He is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age = 0, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }
    getGreting() {
        let greting = super.getGreting()
        greting += this.hasMajor() ? `He is on ${this.major}` : ""
        return greting
    }
}

const me = new Student("Mathew", 20, "Computer SC")
console.log(me.getGreting())