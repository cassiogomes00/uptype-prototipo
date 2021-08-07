let labelRangeContraRelogio = null;
let labelRangeMaratona = null;

let rangeContraRelogio = null;
let rangeMaratona = null;

let buttonContraRelogio = null;
let buttonMaratona = null;
let buttonZen = null;

window.addEventListener('load', (event) => {
  mapearElementos();
  escutarElementos();
});

function mapearElementos() {
  labelRangeContraRelogio = document.querySelector(
    '#label-range-contra-relogio'
  );
  labelRangeMaratona = document.querySelector('#label-range-maratona');

  rangeContraRelogio = document.querySelector('#range-contra-relogio');
  rangeMaratona = document.querySelector('#range-maratona');

  buttonContraRelogio = document.querySelector('#button-contra-relogio');
  buttonMaratona = document.querySelector('#button-maratona');
  buttonZen = document.querySelector('#button-zen');
}

function escutarElementos() {
  rangeContraRelogio.addEventListener('input', (event) => {
    const { value } = event.target;

    labelRangeContraRelogio.textContent = `${value} min`;
  });
  rangeMaratona.addEventListener('input', (event) => {
    const { value } = event.target;

    labelRangeMaratona.textContent = value;
  });

  buttonContraRelogio.addEventListener('click', buttonAcao);
  buttonMaratona.addEventListener('click', buttonAcao);
  buttonZen.addEventListener('click', buttonAcao);
}

function buttonAcao(event) {
  window.location.replace('../test/index.html');
}
