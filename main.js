const chalk = require('chalk');

const colors = [chalk.red('*'), chalk.green('*'), chalk.blue('*')];
let output = '';

for (let i = 0; i < 10; i++) {
  output += colors[i % 3] + ' - ';
}

console.log(output.trim());
