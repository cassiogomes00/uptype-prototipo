let tbodyRanking = null;
let buttonVerMaisTestes = null;
let buttonVerMaisHistorico = null;
let buttonVerMaisRanking = null;

const entradasRaking = [
  { nome: 'Cassio Pereira', velocidade: '254', data: new Date('02/14/2020') },
  { nome: 'Cassio Pereira', velocidade: '203', data: new Date('12/8/2019') },
  { nome: 'Cassio Pereira', velocidade: '198', data: new Date('10/26/2019') },
];

window.addEventListener('load', (event) => {
  mapearElementos();
  escutarElementos();
  render();
});

function mapearElementos() {
  tbodyRanking = document.querySelector('#tbody-ranking');

  buttonVerMaisTestes = document.querySelector('#button-ver-mais-testes');
  buttonVerMaisHistorico = document.querySelector('#button-ver-mais-historico');
  buttonVerMaisRanking = document.querySelector('#button-ver-mais-ranking');
}

function escutarElementos() {
  buttonVerMaisTestes.addEventListener('click', (event) => {
    window.location.replace('../tests/index.html');
  });
  buttonVerMaisHistorico.addEventListener('click', (event) => {
    window.location.replace('../history/index.html');
  });
  buttonVerMaisRanking.addEventListener('click', (event) => {
    window.location.replace('../ranking/index.html');
  });
}

function render() {
  const converterData = (data) => {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    const dataStr = `${dia}/${mes}/${ano}`;

    return dataStr;
  };

  const fazerTd = (valor) => {
    const td = document.createElement('td');

    td.textContent = valor;

    return td;
  };
  const fazerTr = (entradaRanking) => {
    const tr = document.createElement('tr');
    const { nome, velocidade, data } = entradaRanking;

    tr.appendChild(fazerTd(nome));
    tr.appendChild(fazerTd(velocidade));
    tr.appendChild(fazerTd(converterData(data)));

    return tr;
  };
  for (let i = 0; i < entradasRaking.length; i++) {
    const tr = fazerTr(entradasRaking[i]);

    tbodyRanking.appendChild(tr);
  }
}
