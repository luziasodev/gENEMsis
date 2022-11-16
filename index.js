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
