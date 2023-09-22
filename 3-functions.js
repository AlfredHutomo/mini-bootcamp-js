// traditional function, parameters are passed in
function addTwoNumber(firstNumber, secondNumber) {
  let hasil = firstNumber + secondNumber;
  return hasil;
}

let hasilDariFungsi = addTwoNumber(4, 6);

console.log(hasilDariFungsi);

// arrow function, can be assigned as variable
const addTwoNumberArrow = (firstNumber, secondNumber) => {
  let hasil = firstNumber + secondNumber;
  return hasil;
};

console.log(addTwoNumberArrow(5, 5));
