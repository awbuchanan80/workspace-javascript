//External Javascript File
//Get Elements -- Get the text
let spanE = document.getElementById('num1');
let spanT = spanE.textContent;
let n1 = parseInt(spanT);

let spanE2 = document.getElementById('num2');
let spanT2 = spanE2.textContent;
let n2 = parseInt(spanT2);
//OR let n2 = parseInt(document.getElementById('num2').textContent);

let c = n1 + n2;

document.write(c);