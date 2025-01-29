const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 },
];
const counter = {};

for (let user of users) {
    if (counter[user.age]) {
        counter[user.age]++;
    } else {
        counter[user.age] = 1;
    }
}
for (let age in counter) {
    console.log(`Возраст=${age}. Количество людей=${counter[age]}`);
}
