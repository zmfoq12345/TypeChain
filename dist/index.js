"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
}
const yhs = new Human("Yang Hyunseung", 21, "male");
const sayHi = (person) => {
    return `Hello! ${person.getName()}, you are ${person.getAge()} years old, you are a ${person.getGender()}`;
};
console.log(sayHi(yhs));
//# sourceMappingURL=index.js.map