function calcularFerraduras() {
  const qtdCavalos = parseInt(document.getElementById('qtdCavalos').value);

  if (isNaN(qtdCavalos) || qtdCavalos < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira um número válido.";
    return;
  }

  const totalFerraduras = qtdCavalos * 4;
  document.getElementById('resultado').innerText = 
    `Serão necessárias ${totalFerraduras} ferraduras para ${qtdCavalos} cavalos.`;
}
