// Arithmetic Operator: +, -, *, /, %
// Logical operator: &&, ||, !, ??

let number = 10;
let month = 9;

number = number + 1;
number += 1;
number -= 1;
number *= 2;
number /= 10;

let sisaNineModTwo = month % 2;

console.log(sisaNineModTwo);

console.log(number);

// const goodLooking = false;
// const rich = false;

// const isJomblo = !(goodLooking || rich);

// console.log(isJomblo);

console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

// Assertive Operator akan return hasil dalam boolean bisa di gunakan dalam loop dan conditional

// operator === dan == untuk membandingkan variable jika sama
console.log(true === true); // true
console.log(3 === "3"); //false
console.log(3 == "3"); // true

// operator !== dan != untuk membandingkan variable jika tidak sama
console.log(false !== true); // true
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// tips gunakan === atau !== untuk cek data dan tipe mereka agar lebih tepat

// Operator assertive lainnya seperti >, >=, <, <= sama seperti di matematika
