// 1

console.log(1.1);

function convertTemperature(celsius, toFahrenheit) {
  if (toFahrenheit == true) {
    return (celsius * 9) / 5 + 32;
  } else {
    return ((celsius - 32) * 5) / 9;
  }
}

console.log(convertTemperature(25, true));
console.log(convertTemperature(0, true));
console.log(convertTemperature(100, true));

console.log(convertTemperature(77, false));
console.log(convertTemperature(32, false));
console.log(convertTemperature(212, false));

console.log(1.2);

function validatePassword(password) {
  if (password.length <= 8) {
    return false;
  }

  let hasLetter = /[a-zA-Z]/.test(password);
  let hasNumber = /[0-9]/.test(password);

  if (hasLetter && hasNumber) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePassword("password123"));
console.log(validatePassword("pass"));
console.log(validatePassword("password"));
console.log(validatePassword("12345678"));

console.log(1.3);

function calculate(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "неверная операция";
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));

// 2

console.log(2);

let buttons = document.querySelectorAll(".operation-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operation = button.dataset.operation;
    let result;

    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      if (num2 === 0) {
        result = "На ноль делить нельзя!";
      } else {
        result = num1 / num2;
      }
    }

    document.getElementById("result").innerText = "Результат: " + result;
  });
});
