function calcular() {
  const cotacaoInput = document.getElementById('cotacao');
  const resultadoDiv = document.getElementById('resultado');
  const cotacao = parseFloat(cotacaoInput.value);

  if (isNaN(cotacao) || cotacao <= 0) {
    resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira uma cotação válida.</p>";
    return;
  }

  const aumentos = [1, 2, 5, 10];
  let html = `<h2>Resultados:</h2><ul>`;

  aumentos.forEach(percentual => {
    const valorCalculado = cotacao * (1 + percentual / 100);
    html += `<li>${percentual}% de aumento: R$ ${valorCalculado.toFixed(2)}</li>`;
  });

  html += '</ul>';
  resultadoDiv.innerHTML = html;
}
