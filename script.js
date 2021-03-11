let equation = [];
const visor = document.querySelector(".results");

function Clear() {
  equation = [0];
}

// Essa função é responsável por pegar o algarismo digitado e colocar dentro do array
function AddArray(algarismo) {
  equation.push(algarismo);

  if (algarismo === "C") Clear();

  visor.innerHTML = equation;

  console.log(equation);
}

AddArray(0);
