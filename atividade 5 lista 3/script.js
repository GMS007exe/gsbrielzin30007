function calcularLitros() {
  const preco = parseFloat(document.getElementById('preco').value);
  const valor = parseFloat(document.getElementById('valor').value);

  if (isNaN(preco) || isNaN(valor) || preco <= 0 || valor < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
    return;
  }

  const litros = valor / preco;
  document.getElementById('resultado').innerText = 
    `Com R$ ${valor.toFixed(2)}, você abasteceu ${litros.toFixed(2)} litros de gasolina.`;
}
