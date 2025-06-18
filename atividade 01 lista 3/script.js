function calcularArea() {
  const largura = parseFloat(document.getElementById('largura').value);
  const comprimento = parseFloat(document.getElementById('comprimento').value);

  if (isNaN(largura) || isNaN(comprimento)) {
    document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
    return;
  }

  const area = largura * comprimento;
  document.getElementById('resultado').innerText = `A área do terreno é ${area.toFixed(2)} m².`;
}
