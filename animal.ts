class Animal {
    constructor(public name: string) {}
    makeSound() : void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Cat extends Animal {
    makeSound() : void {
        console.log(`${this.name} meows.`);
    }
}
class Dog extends Animal {
    makeSound() : void {
        console.log(`${this.name} Hong.`);
    }
}

const  cat = new Cat("Rex");
cat.makeSound();
const dog = new Dog("Buddy");
dog.makeSound();
const zoo: Animal[] = [new Cat("Neena"), new Dog("Max")];
zoo.forEach(animal => animal.makeSound());