function adicionarTexto() {
  let conteudo = prompt("Digite o seu depoimento:");

  document.querySelector('.card').innerHTML =
    `<p>${conteudo}</p>`;
}


let timeoutID;
let intervalID;
let segundosRestantes = 5;

function deletarTexto() {

  document.querySelector('.card').innerHTML =
    `
        <h1>Conteúdo Apagado!!</h1>
        <div id="contador">Sumindo em ${segundosRestantes} segundos...</div>
      `


  iniciarContagem();

}

function iniciarContagem() {
  clearTimeout(timeoutID);
  clearInterval(intervalID);

  segundosRestantes = 5;
  atualizarContador();

  // Atualiza o contador visual a cada segundo
  intervalID = setInterval(() => {
    segundosRestantes--;
    atualizarContador();

    if (segundosRestantes <= 0) {
      clearInterval(intervalID);
    }
  }, 1000);

  // Remove o conteúdo após 5 segundos
  timeoutID = setTimeout(() => {
    document.querySelector('.card').innerHTML = "";
  }, 5000);
}

function atualizarContador() {
  const contadorEl = document.getElementById("contador");
  if (contadorEl) {
    contadorEl.textContent = `Sumindo em ${segundosRestantes} segundo${segundosRestantes === 1 ? '' : 's'}...`;
  }
}

// Reinicia contagem a cada clique
document.addEventListener('click', () => {
  iniciarContagem();
});

function alterarCor() {
  // Gerar valores aleatórios para R, G e B
  const r = Math.floor(Math.random() * 256); // valor entre 0 e 255
  const g = Math.floor(Math.random() * 256); // valor entre 0 e 255
  const b = Math.floor(Math.random() * 256); // valor entre 0 e 255

  // Formar a cor RGB
  const cor = `rgb(${r}, ${g}, ${b})`;

  // Alterar a cor de fundo do body
  document.body.style.backgroundColor = cor;

  // Atualizar a label com a nova cor
  document.getElementById("corAtual").textContent = cor;

}