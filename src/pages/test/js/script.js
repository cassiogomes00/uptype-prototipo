let divTexto = null;
let inputTexto = null;

const loremStr =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
// const loremStr =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Platea dictumst vestibulum rhoncus est. Viverra ipsum nunc aliquet bibendum enim. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Convallis tellus id interdum velit laoreet id donec ultrices. Sit amet dictum sit amet. Nisl rhoncus mattis rhoncus urna. A iaculis at erat pellentesque adipiscing commodo. Nibh tortor id aliquet lectus. Augue ut lectus arcu bibendum. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Enim eu turpis egestas pretium aenean pharetra magna. Vitae et leo duis ut diam quam. Mauris cursus mattis molestie a iaculis.';
const loremArray = loremStr.split('').map((elemento) => {
  return {
    valor: elemento,
    estaCorreto: null,
  };
});

let charAtual = 0;

window.addEventListener('load', (event) => {
  mapearElementos();
  escutarElementos();
  render();
});

function mapearElementos() {
  divTexto = document.querySelector('#div-texto');
  inputTexto = document.querySelector('#input-texto');

  inputTexto.focus();
}

function escutarElementos() {
  inputTexto.addEventListener('keyup', (event) => {
    const ultimoChar = event.target.value.slice(-1);

    if (event.key === 'Shift') {
      return;
    }

    if (charAtual === loremArray.length) {
      const passou = loremArray.every((element) => {
        return element.estaCorreto;
      });

      if (passou) {
        window.alert('Parabéns! Você concluiu o teste');
        window.location.replace('../tests/index.html');
        return;
      }

      window.alert('Infelizmente você não passou.');
      window.location.replace('../tests/index.html');
    }

    if (event.key === 'Backspace' && charAtual !== 0) {
      loremArray[charAtual].estaCorreto = null;
      charAtual -= 2;
    }

    if (ultimoChar === loremArray[charAtual].valor) {
      loremArray[charAtual].estaCorreto = true;
    } else if (ultimoChar !== loremArray[charAtual].valor) {
      loremArray[charAtual].estaCorreto = false;
    }

    charAtual++;
    render();
  });
}

function render() {
  const fazerSpan = (caractere) => {
    const definirCor = (estaCorreto) => {
      switch (estaCorreto) {
        case true:
          span.classList.add('caractere-correto');
          break;
        case false:
          span.classList.add('caractere-incorreto');
          break;
        default:
          span.classList.add('caractere-nulo');
      }
    };

    const span = document.createElement('span');

    span.textContent = caractere.valor;

    definirCor(caractere.estaCorreto);

    return span;
  };

  divTexto.innerHTML = '';

  for (let i = 0; i < loremArray.length; i++) {
    const span = fazerSpan(loremArray[i]);

    divTexto.appendChild(span);
  }
}
