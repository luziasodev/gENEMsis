// post-it tutorial
document.getElementById("tutorial").addEventListener("click", function () {
  var modal = document.getElementById("tutorialAlert");
  modal.style.display = "block";

  var closeButton = document.getElementsByClassName("close-button")[0];
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

// post-it estrutura
document.getElementById("estrutura").addEventListener("click", function () {
  var modal = document.getElementById("estruturaAlert");
  modal.style.display = "block";

  var closeButton = document.getElementsByClassName("close-button")[1];
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

// post-it competencias
document.getElementById("competencias").addEventListener("click", function () {
  var modal = document.getElementById("competenciasAlert");
  modal.style.display = "block";

  var closeButton = document.getElementsByClassName("close-button")[2];
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

const carouselInner = document.querySelector(".carousel-inner");
const tables = carouselInner.querySelectorAll("table");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;

function showSlide(slideIndex) {
  tables.forEach((table, index) => {
    if (index === slideIndex) {
      table.classList.add("active");
    } else {
      table.classList.remove("active");
    }
  });
}

function prevTable() {
  currentSlide = (currentSlide - 1 + tables.length) % tables.length;
  showSlide(currentSlide);
}

function nextTable() {
  currentSlide = (currentSlide + 1) % tables.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

//trechos da redação

const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  const HTMLElement = items[i];
  HTMLElement.addEventListener("click", ({ target }) => {
    if (target.parentNode.classList.contains("redacao") ||
      target.classList.contains("main_place") ||
      target.classList.contains("arg1_place") ||
      target.classList.contains("arg2_place")) {
      return;
    }

    target.classList.toggle("selected");
  });
}

async function copyDivToClipboard() {
  const textoFormatado = document.getElementById("texto-formatado");
  const content = textoFormatado.value;

  await navigator.clipboard.writeText(content).then(
    () => alert("O texto foi copiado com sucesso"),
    () => alert("O texto não pode ser copiado"));
}

//substituição

function addTema() {
  var input = document.getElementById("tema").value;
  var divsTema = document.querySelectorAll(".main_place");

  for (var i = 0; i < divsTema.length; i++) {
    divsTema[i].innerText = input;
  }
}

const redacao = document.querySelector(".redacao");

redacao.addEventListener("click", ({ target }) => {
  if (
    target.classList.contains("item") ||
    target.classList.contains("main_place") ||
    target.classList.contains("arg1_place") ||
    target.classList.contains("arg2_place")
  ) {
    return;
  }

  if (target.parentNode.classList.contains("redacao") ||
    target.classList.contains("main_place")) {
    return;
  }

  target.replaceChildren();

  const selectedItems = document.querySelectorAll(".selected");
  if (selectedItems.length !== 0) {
    for (let index = 0; index < selectedItems.length; index++) {
      const element = selectedItems[index];
      const clone = element.cloneNode(true);
      clone.classList.remove("selected");

      target.appendChild(clone);
    }
  }
});

function addArgumento() {
  var div1 = null;
  var div2 = null;

  for (var i = 1; i <= 18; i++) {
    var divTexto = document.getElementById("arg" + i);
    if (divTexto.classList.contains("selecionado")) {
      if (div1 === null) {
        div1 = divTexto;
      } else if (div2 === null) {
        div2 = divTexto;
      }
    }
  }

  if (div1 !== null && div2 !== null) {
    var div1_places = document.getElementsByClassName("arg1_place");
    var div2_places = document.getElementsByClassName("arg2_place");

    for (var j = 0; j < div1_places.length; j++) {
      div1_places[j].innerText = div1.innerText;
    }

    for (var k = 0; k < div2_places.length; k++) {
      div2_places[k].innerText = div2.innerText;
    }
  }
}

function selecionarDiv(div) {
  div.classList.toggle("selecionado");
  addArgumento();
}

//botões

function readMore(hide) {
  let dots = document.querySelector(`.box[data-hide="${hide}"] .dots`);
  let moreText = document.querySelector(`.box[data-hide="${hide}"] .more`);
  let btnText = document.querySelector(`.box[data-hide="${hide}"] .btnbox`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "ocultar";
    moreText.style.display = "inline";
  }
}

function readMore2(hide2) {
  let dots2 = document.querySelector(`.eixo[data-hide2="${hide2}"] .dots2`);
  let moreText2 = document.querySelector(`.eixo[data-hide2="${hide2}"] .more2`);
  let btnText2 = document.querySelector(`.eixo[data-hide2="${hide2}"] .btn2`);

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.textContent = "...";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.textContent = "ocultar";
    moreText2.style.display = "inline";
  }
}

function readMore3(hide3) {
  let dots3 = document.querySelector(
    `.container[data-hide3="${hide3}"] .dots3`
  );
  let moreText3 = document.querySelector(
    `.container[data-hide3="${hide3}"] .more3`
  );
  let btnText3 = document.querySelector(
    `.container[data-hide3="${hide3}"] .btncontainer`
  );

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.textContent = "...";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.textContent = "ocultar";
    moreText3.style.display = "inline";
  }
}

//formatar
const rascunho = document.getElementById("rascunho");
const formatar = document.getElementById("formatar");

formatar.addEventListener("click", function () {
  const items = document.querySelectorAll("div#rascunho > div.item");
  const phrases = [...items].map((item) => item.innerText)

  phrases[4] && (phrases[4] += "\n    ")
  phrases[10] && (phrases[10] += "\n    ")
  phrases[16] && (phrases[16] += "\n    ")

  console.log(phrases);
  console.log(phrases.join(" "));

  const textarea = document.createElement("textarea");
  textarea.id = "texto-formatado"

  rascunho.replaceWith(textarea);
  textarea.value = "    " + phrases.join(" ");
});

//copiar 