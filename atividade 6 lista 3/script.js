function calcularValor() {
  const peso = parseFloat(document.getElementById('peso').value);
  const precoPorQuilo = 12.00;

  if (isNaN(peso) || peso <= 0) {
    document.getElementById('resultado').innerText = "Insira um peso válido.";
    return;
  }

  const valor = peso * precoPorQuilo;

  document.getElementById('resultado').innerText = 
    `Valor a pagar: R$ ${valor.toFixed(2)}`;
}
