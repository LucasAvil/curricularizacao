const botao = document.getElementById('botao-tema');

const temaSalvo = localStorage.getItem('preferencia-tema')

if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode')
}

botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')){
        localStorage.setItem('preferencia-tema', 'dark')
        botao.textContent = '☼';

    } else {
        localStorage.setItem('preferencia-tema', 'light')
        botao.textContent = '☾';
    }
});

const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

btnAumentar.addEventListener('click', () => {
  const tamanhoAtual = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  if (tamanhoAtual < 35) {
    document.documentElement.style.fontSize = tamanhoAtual + 2 + 'px';
  }
});

btnDiminuir.addEventListener('click', () => {
  const tamanhoAtual = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  if (tamanhoAtual > 10) {
    document.documentElement.style.fontSize = tamanhoAtual - 2 + 'px';
  }
});

const btnGerar = document.querySelector('#btn-gerar')
const inputSenha = document.querySelector('#senha-resultado')

if (btnGerar) {
  btnGerar.addEventListener('click', () => {
    const tamanho = 12;
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeros = '0123456789'
    const especiais = '!@#$%&*()_+}{[]:;?><,./-='
    const todosCaracteres = letrasMaiusculas + letrasMaiusculas.toLowerCase() + numeros + especiais
    let senhaGerada = ""
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * todosCaracteres.length);
      senhaGerada += todosCaracteres.charAt(indice)
      
    }
    inputSenha.value = senhaGerada
  })
}