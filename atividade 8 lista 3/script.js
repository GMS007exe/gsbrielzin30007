function calcularTotal() {
  const pequenas = parseInt(document.getElementById('pequenas').value) || 0;
  const medias = parseInt(document.getElementById('medias').value) || 0;
  const grandes = parseInt(document.getElementById('grandes').value) || 0;

  const total = (pequenas * 10) + (medias * 12) + (grandes * 15);

  document.getElementById('resultado').innerText =
    `Valor total arrecadado: R$ ${total.toFixed(2)}`;
}
