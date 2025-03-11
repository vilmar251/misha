class Animal {
  public type: 'animal' = 'animal';
}

export class Cat extends Animal {
  sayMeow() {
    console.log('meow');
  }
}

export class Dog extends Animal {
  sayWoof() {
    console.log('woof');
  }
}

const cat = new Cat();
const dog = new Dog();

console.log(cat.type);
cat.sayMeow();

console.log(dog.type);
dog.sayWoof();
