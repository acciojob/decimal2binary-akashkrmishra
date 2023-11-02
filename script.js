function decimalToBinary(num) {
  //Write you code here
	const number = parseInt(prompt('Enter a decimal number: '));
const result = number.toString(2);
console.log(`Binary:`+` `+ result);
  return result;
}

window.decimalToBinary = decimalToBinary;
