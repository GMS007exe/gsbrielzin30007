function calcularDias() {
  const dia = parseInt(document.getElementById('dia').value);
  const mes = parseInt(document.getElementById('mes').value);

  if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 30 || mes < 1 || mes > 12) {
    document.getElementById('resultado').innerText = "Insira um dia e mês válidos (1-30, 1-12).";
    return;
  }

  const diasPassados = (mes - 1) * 30 + dia;

  document.getElementById('resultado').innerText =
    `Já se passaram ${diasPassados} dias desde o início do ano.`;
}
