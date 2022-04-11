class Human {
    private name: string
    private age: number
    private gender: string
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getGender(): string {
        return this.gender
    }
}


const yhs: Human = new Human("Yang Hyunseung", 21, "male")

const sayHi = (person: Human): string => {
    return `Hello! ${person.getName()}, you are ${person.getAge()} years old, you are a ${person.getGender()}`
}

console.log(sayHi(yhs))

export {}