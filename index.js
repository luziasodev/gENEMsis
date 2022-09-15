const items = document.querySelectorAll('.item')
const redacao = document.querySelector('.redacao')

for (let index = 0; index < items.length; index++) {
  const HTMLElement = items[index];
  HTMLElement.addEventListener('click', ({ target }) => {
    if (target.parentNode.classList.contains('redacao')) {
      return
    }

    target.classList.toggle('selected');
  })
}

redacao.addEventListener('click', ({ target }) => {
  if (target.classList.contains('item')) {
    return
  }

  target.replaceChildren()

  const selectedItems = document.querySelectorAll('.selected')
  if (selectedItems.length !== 0) {
    for (let index = 0; index < selectedItems.length; index++) {
      const element = selectedItems[index];
      const clone = element.cloneNode(true)
      clone.classList.remove('selected')

      target.appendChild(clone)
    }
  }
})

function amyFunction() {
  const adots = document.getElementById("adots");
  const amoreText = document.getElementById("amore");
  const abtnText = document.getElementById("amyBtn");

  if (adots.style.display === "none") {
    adots.style.display = "inline";
    abtnText.innerHTML = "...";
    amoreText.style.display = "none";
  } else {
    adots.style.display = "none";
    abtnText.innerHTML = "ocultar";
    amoreText.style.display = "inline";
  }
}

function emyFunction() {
  const edots = document.getElementById("edots");
  const emoreText = document.getElementById("emore");
  const ebtnText = document.getElementById("emyBtn");

  if (edots.style.display === "none") {
    edots.style.display = "inline";
    ebtnText.innerHTML = "...";
    emoreText.style.display = "none";
  } else {
    edots.style.display = "none";
    ebtnText.innerHTML = "ocultar";
    emoreText.style.display = "inline";
  }
}

function pmyFunction() {
  const pdots = document.getElementById("pdots");
  const pmoreText = document.getElementById("pmore");
  const pbtnText = document.getElementById("pmyBtn");

  if (pdots.style.display === "none") {
    pdots.style.display = "inline";
    pbtnText.innerHTML = "...";
    pmoreText.style.display = "none";
  } else {
    pdots.style.display = "none";
    pbtnText.innerHTML = "ocultar";
    pmoreText.style.display = "inline";
  }
}

function smyFunction() {
  const pdots = document.getElementById("sdots");
  const pmoreText = document.getElementById("smore");
  const pbtnText = document.getElementById("smyBtn");

  if (pdots.style.display === "none") {
    pdots.style.display = "inline";
    pbtnText.innerHTML = "...";
    pmoreText.style.display = "none";
  } else {
    pdots.style.display = "none";
    pbtnText.innerHTML = "ocultar";
    pmoreText.style.display = "inline";
  }
}

function tmyFunction() {
  const tdots = document.getElementById("tdots");
  const tmoreText = document.getElementById("tmore");
  const tbtnText = document.getElementById("tmyBtn");

  if (tdots.style.display === "none") {
    tdots.style.display = "inline";
    tbtnText.innerHTML = "...";
    tmoreText.style.display = "none";
  } else {
    tdots.style.display = "none";
    tbtnText.innerHTML = "ocultar";
    tmoreText.style.display = "inline";
  }
}

