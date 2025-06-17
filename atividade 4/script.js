function finalizarPedido() {
  const sabor1 = document.getElementById('sabor1').value.trim();
  const sabor2 = document.getElementById('sabor2').value.trim();
  const sabor3 = document.getElementById('sabor3').value.trim();
  const sabor4 = document.getElementById('sabor4').value.trim();
  const refri = parseInt(document.getElementById('refrigerantes').value);
  const resultadoDiv = document.getElementById('resultado');

  if (!sabor1 || !sabor2 || !sabor3 || !sabor4 || isNaN(refri) || refri < 0) {
    resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, preencha todos os campos corretamente.</p>";
    return;
  }

  const precoPizza = 12;
  const precoRefri = 7;
  const total = (4 * precoPizza) + (refri * precoRefri);

  resultadoDiv.innerHTML = `
    <h2>Resumo do Pedido:</h2>
    <p><strong>Sabores escolhidos:</strong></p>
    <ul>
      <li>${sabor1}</li>
      <li>${sabor2}</li>
      <li>${sabor3}</li>
      <li>${sabor4}</li>
    </ul>
    <p><strong>Refrigerantes:</strong> ${refri}</p>
    <p><strong>Total a pagar:</strong> R$ ${total.toFixed(2)}</p>
  `;
}
