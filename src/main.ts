abstract class Person {
  constructor(
    public name: string,
    public surname: string,
  ) {}

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(
    name: string,
    surname: string,
    public year: number,
  ) {
    super(name, surname);
  }

  getCourse(): number {
    const currentYear = 2024;
    const course = currentYear - this.year;
    return course;
  }
}

const student = new Student('Иван', 'Иванов', 2020);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
