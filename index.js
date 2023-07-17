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
  if (target.classList.contains('item') || target.classList.contains('main_place') ) {
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
  let dots3 = document.querySelector(`.container[data-hide3="${hide3}"] .dots3`);
  let moreText3 = document.querySelector(`.container[data-hide3="${hide3}"] .more3`);
  let btnText3 = document.querySelector(`.container[data-hide3="${hide3}"] .btncontainer`);

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

function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("copiar"));
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
 }

 function addTema() {
  var input = document.getElementById("tema").value; // Obtém o valor do input
  var divsTema = document.querySelectorAll(".main_place"); // Obtém todas as divs com a classe "tema"

  for (var i = 0; i < divsTema.length; i++) {
    divsTema[i].innerText = input; // Define o valor do parágrafo em cada div
  }
}

function addArgumento() {
  var div1 = null; // Variável para armazenar a primeira div selecionada
      var div2 = null; // Variável para armazenar a segunda div selecionada

      for (var i = 1; i <= 18; i++) {
        var divTexto = document.getElementById("arg" + i);
        if (divTexto.classList.contains("selecionada")) {
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
  div.classList.toggle("selecionada");
  addArgumento();
}
