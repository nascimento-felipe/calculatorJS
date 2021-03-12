let equation = "",
  firstNumber = "",
  operatorEscolhido = "",
  secondNumber = "",
  finalResult = 0;

const operators = ["+", "-", "*", "/"];
const visor = document.querySelector(".results");

function Clear() {
  return (
    (equation = ""),
    (firstNumber = ""),
    (secondNumber = ""),
    (finalResult = 0),
    (visor.innerHTML = 0)
  );
}

// Essa função é responsável por pegar o algarismo digitado e colocar dentro do array
function AddNumber(algarismo) {
  equation += algarismo;

  if (algarismo === "C") return Clear();

  if (equation.includes("+")) {
    if (algarismo === "+") operatorEscolhido = "+";
    else {
      secondNumber += algarismo;
    }
  } else {
    firstNumber += algarismo;
  }

  return (visor.innerHTML = equation);
}

function Calculate() {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  switch (operatorEscolhido) {
    case "+":
      finalResult = firstNumber + secondNumber;
      break;

    case "-":
      finalResult = firstNumber - secondNumber;
      break;

    case "*":
      finalResult = firstNumber * secondNumber;
      break;

    case "/":
      finalResult = firstNumber / secondNumber;
      break;
  }

  visor.innerHTML = finalResult;
}

Clear();
