alert("olaMundo");
var formula = "";
var numero = "";
var numeros = [];
var operadores = [];

function printa(dado) {
  if (dado == "+" || dado == "-" || dado == "/" || dado == "x") {
    numeros.push(Number(numero));
    operadores.push(dado);
    numero = "";
  } else {
    numero = numero + dado;
  }

  formula = formula + dado; // formula = + dado;
  document.getElementById("formula").innerText = formula;
}
function calcula() {
  printa("e");
  for (let i = 0; i < numeros.length; i++);
  {
    switch (operadores[i]) {
      case "+":
        console.log("somar");
        resultado = numeros[i] + numeros[i + 1];
        break;
        console.log("sub");
        resultado = numeros[i] - numeros[i + 1];
        break;
        console.log("mul");
        resultado = numeros[i] * numeros[i + 1];
        break;
        console.log("div");
        resultado = numeros[i] / numeros[i + 1];
        break;
    }
    console.log(numeros[i]);
    console.log(operadores[i]);
  }
}
console.log(numeros);
console.log(operadores);

function apaga(dado) {
  //formula = ''; //apaga a tela toda
  console.log(formula.length);
  console.log(formula.length - 1);
  formula = formula.substring(0, formula.length - 1); //apaga item por item
  document.getElementById("formula").innerText = formula;
}
