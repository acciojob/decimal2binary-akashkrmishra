function decimalToBinary(num) {
  //Write you code here
  return(num>>>0).toString(2);
let num = 10;
let binary = decimalToBinary(num);
return binary;
}

window.decimalToBinary = decimalToBinary;
