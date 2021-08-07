let elementosClicaveis = null;

window.addEventListener('load', (event) => {
  mapearElementos();
  ouvirElementos();
});

function mapearElementos() {
  elementosClicaveis = document.querySelector('#clicavel');
}

function ouvirElementos() {
  elementosClicaveis.addEventListener('click', (event) => {
    const href = event.target.parentElement.getAttribute('href');
    console.log("object")
    loadDoc(href);
  });
}

function loadDoc(path) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState && this.status == 200) {
      const conteudo = document.querySelector('#conteudo');
      conteudo.innerHTML = this.responseText;
    }
  };

  xhttp.open('GET', path, true);
  xhttp.send();
}
