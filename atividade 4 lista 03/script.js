function calcularDias() {
  const nome = document.getElementById('nome').value.trim();
  const idade = parseInt(document.getElementById('idade').value);

  if (!nome || isNaN(idade) || idade < 0) {
    document.getElementById('resultado').innerText = "Por favor, preencha os dados corretamente.";
    return;
  }

  const diasDeVida = idade * 365;
  document.getElementById('resultado').innerText = 
    `${nome.toUpperCase()}, VOCÊ JÁ VIVEU ${diasDeVida} DIAS`;
}
