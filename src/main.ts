function say(reName: string) {
  return function (name: string): string {
    return `${reName}, ${name}!`;
  };
}

const sayHi = say('Hi');
const sayBye = say('Bye');

console.log(sayHi('Ruslan')); // Hi, Ruslan!
console.log(sayHi('Maxim')); // Hi, Maxim!

console.log(sayBye('Ruslan')); // Bye, Ruslan!
console.log(sayBye('Maxim')); // Bye, Maxim!
