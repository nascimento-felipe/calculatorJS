let equation = "",
  firstNumber = "",
  operatorEscolhido = "",
  secondNumber = "",
  finalResult = 0,
  IsFirst = true;

const operators = ["+", "-", "*", "/"];
const visor = document.querySelector(".results");

function Clear() {
  return (
    (equation = ""),
    (firstNumber = ""),
    (secondNumber = ""),
    (finalResult = 0),
    (visor.innerHTML = 0),
    (IsFirst = true)
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

  if (IsFirst) return (visor.innerHTML = equation);

  return (visor.innerHTML = `${finalResult} ${operatorEscolhido} ${secondNumber}`);
}

function Calculate() {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  switch (operatorEscolhido) {
    case "+":
      finalResult = firstNumber + secondNumber;
      firstNumber = finalResult;
      secondNumber = "";
      operatorEscolhido = "";
      IsFirst = false;
      break;

    case "-":
      finalResult = firstNumber - secondNumber;
      firstNumber = finalResult;
      secondNumber = "";
      operatorEscolhido = "";
      break;

    case "*":
      finalResult = firstNumber * secondNumber;
      firstNumber = finalResult;
      secondNumber = "";
      operatorEscolhido = "";
      break;

    case "/":
      finalResult = firstNumber / secondNumber;
      firstNumber = finalResult;
      secondNumber = "";
      operatorEscolhido = "";
      break;
  }

  visor.innerHTML = finalResult;
}

Clear();
