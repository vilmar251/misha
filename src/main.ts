const original = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'oaklgybpwitedztsqgfchmjrnxv';

const decrypt = (text: string) => {
  return text.replace(/[a-z]/g, (char) => original[cipher.indexOf(char)] || char);
};
const encryptedText = 'ntg ajuk fjbydv vikjo citvikh yd mkjidy dv qjujhp iyco. ptdvijoh!';
console.log(decrypt(encryptedText));
о;
