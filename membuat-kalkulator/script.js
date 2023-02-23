const display = document.querySelector(".head");
const clearAll = document.querySelector(".container .body ul li:nth-child(1)");
const del = document.querySelector(".container .body ul li:nth-child(2)");
const percent = document.querySelector(".container .body ul li:nth-child(3)");
const divide = document.querySelector(".container .body ul li:nth-child(4)");
const seven = document.querySelector(".container .body ul li:nth-child(5)");
const eight = document.querySelector(".container .body ul li:nth-child(6)");
const nine = document.querySelector(".container .body ul li:nth-child(7)");
const multiply = document.querySelector(".container .body ul li:nth-child(8)");
const four = document.querySelector(".container .body ul li:nth-child(9)");
const five = document.querySelector(".container .body ul li:nth-child(10)");
const six = document.querySelector(".container .body ul li:nth-child(11)");
const minus = document.querySelector(".container .body ul li:nth-child(12)");
const one = document.querySelector(".container .body ul li:nth-child(13)");
const two = document.querySelector(".container .body ul li:nth-child(14)");
const three = document.querySelector(".container .body ul li:nth-child(15)");
const add = document.querySelector(".container .body ul li:nth-child(16)");
const zero = document.querySelector(".container .body ul li:nth-child(18)");
const point = document.querySelector(".container .body ul li:nth-child(19)");
const result = document.querySelector(".container .body ul li:nth-child(20)");
let angka = "";
document.body.addEventListener("click", function (e) {
  if (e.target === clearAll) {
    display.innerHTML = "";
    angka = "";
  } else if (e.target === one) {
    angka += "1";
    display.innerHTML = angka;
  } else if (e.target === two) {
    angka += "2";
    display.innerHTML = angka;
  } else if (e.target === three) {
    angka += "3";
    display.innerHTML = angka;
  } else if (e.target === four) {
    angka += "4";
    display.innerHTML = angka;
  } else if (e.target === five) {
    angka += "5";
    display.innerHTML = angka;
  } else if (e.target === six) {
    angka += "6";
    display.innerHTML = angka;
  } else if (e.target === seven) {
    angka += "7";
    display.innerHTML = angka;
  } else if (e.target === eight) {
    angka += "8";
    display.innerHTML = angka;
  } else if (e.target === nine) {
    angka += "9";
    display.innerHTML = angka;
  } else if (e.target === zero) {
    angka += "0";
    display.innerHTML = angka;
  } else if (e.target === percent) {
    angka += "/100";
    display.innerHTML = angka;
  } else if (e.target === divide) {
    angka += "/";
    display.innerHTML = angka;
  } else if (e.target === multiply) {
    angka += "*";
    display.innerHTML = angka;
  } else if (e.target === add) {
    angka += "+";
    display.innerHTML = angka;
  } else if (e.target === minus) {
    angka += "-";
    display.innerHTML = angka;
  } else if (e.target === point) {
    angka += ".";
    display.innerHTML = angka;
  } else if (e.target === del) {
    angka = angka.replace(angka[angka.length - 1], "");
    display.innerHTML = angka;


  } else if (e.target === result) {
    let results = calculate(angka);
    display.innerHTML = results;
    angka = results.toString();
  }
});


function calculate(str) {
  // Hapus spasi pada string
  str = str.replace(/\s/g, '');
  
  // Buat regex untuk mencocokkan operasi matematika
  const regex = /(-?\d+)([\+\-\*\/])(-?\d+)/;
  
  while (regex.test(str)) {
    // Ambil operasi matematika yang cocok dengan regex
    const match = str.match(regex);
    
    // Ambil nilai dari angka pertama dan kedua serta operatornya
    const num1 = parseFloat(match[1]);
    const num2 = parseFloat(match[3]);
    const operator = match[2];
    
    // Lakukan operasi matematika sesuai operator
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        throw new Error('Operator tidak dikenali!');
    }
    
    // Replace string dengan hasil operasi matematika
    str = str.replace(regex, result);
  }
  
  return parseFloat(str);
}





