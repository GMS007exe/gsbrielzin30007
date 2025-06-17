function calcularOperacoes() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, digite dois números inteiros válidos.</p>";
    return;
  }

  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const multiplicacao = num1 * num2;
  const divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Indefinida (divisão por zero)";

  resultadoDiv.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
}
