function calcularDistancia() {
  const x1 = parseFloat(document.getElementById('x1').value);
  const y1 = parseFloat(document.getElementById('y1').value);
  const x2 = parseFloat(document.getElementById('x2').value);
  const y2 = parseFloat(document.getElementById('y2').value);

  if ([x1, y1, x2, y2].some(isNaN)) {
    document.getElementById('resultado').innerText = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  document.getElementById('resultado').innerText = 
    `A distância entre os pontos é: ${distancia.toFixed(2)}`;
}
