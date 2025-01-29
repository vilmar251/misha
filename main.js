let height = 5;

for (let i = 1; i <= height; i++) {
    let stars = '*'.repeat(2 * i - 1);
    let spaces = ' '.repeat(height - i);
    console.log(spaces + stars);
}
