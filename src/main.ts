import { faker } from '@faker-js/faker';
import chalk from 'chalk';

const user = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};

console.log(chalk.blue('First Name: ') + chalk.green(user.firstName));
console.log(chalk.blue('Last Name: ') + chalk.green(user.lastName));
console.log(chalk.blue('Email: ') + chalk.green(user.email));
