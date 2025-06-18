function calcularVenda() {
  const paes = parseInt(document.getElementById('paes').value);
  const broas = parseInt(document.getElementById('broas').value);

  if (isNaN(paes) || isNaN(broas) || paes < 0 || broas < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira quantidades válidas.";
    return;
  }

  const valorPaes = paes * 0.12;
  const valorBroas = broas * 1.50;
  const total = valorPaes + valorBroas;
  const poupanca = total * 0.10;

  document.getElementById('resultado').innerHTML = `
    Total arrecadado: R$ ${total.toFixed(2)}<br>
    Valor a ser guardado na poupança: R$ ${poupanca.toFixed(2)}
  `;
}
