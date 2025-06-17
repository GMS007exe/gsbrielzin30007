function calcularIngredientes() {
  const pessoasInput = document.getElementById('pessoas');
  const resultadoDiv = document.getElementById('resultado');
  const pessoas = parseInt(pessoasInput.value);

  if (isNaN(pessoas) || pessoas <= 0) {
    resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira um número válido de pessoas.</p>";
    return;
  }

  const ovos = pessoas * 2;
  const queijo = pessoas * 50;

  resultadoDiv.innerHTML = `
    <p>Para ${pessoas} ${pessoas === 1 ? 'pessoa' : 'pessoas'}, você vai precisar de:</p>
    <ul>
      <li><strong>${ovos}</strong> ovos</li>
      <li><strong>${queijo}</strong> gramas de queijo</li>
    </ul>
  `;
}
