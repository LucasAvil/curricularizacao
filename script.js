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

let tamanhoAtual = 100;

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