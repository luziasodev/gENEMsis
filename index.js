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

function introFunction() {
  var intro = document.getElementById("intro");
  var introc = document.getElementById("introc");
  var introbtnText = document.getElementById("introBtn");

  if (intro.style.display === "none") {
    intro.style.display = "inline";
    introbtnText.innerHTML = "...";
    introc.style.display = "none";
  } else {
    intro.style.display = "none";
    introbtnText.innerHTML = "ocultar";
    introc.style.display = "inline";
  }
}


function problemFunction() {
  var problem = document.getElementById("problem");
  var problemc = document.getElementById("problemc");
  var problemBtn = document.getElementById("problemBtn");

  if (intro.style.display === "none") {
    problem.style.display = "inline";
    problemBtn.innerHTML = "...";
    problemc.style.display = "none";
  } else {
    problem.style.display = "none";
    problemBtn.innerHTML = "ocultar";
    problemc.style.display = "inline";
  }
}

function teseFunction() {
  var tese = document.getElementById("tese");
  var tesec = document.getElementById("tesec");
  var teseBtn = document.getElementById("teseBtn");

  if (intro.style.display === "none") {
    tese.style.display = "inline";
    teseBtn.innerHTML = "...";
    tesec.style.display = "none";
  } else {
    tese.style.display = "none";
    teseBtn.innerHTML = "ocultar";
    tesec.style.display = "inline";
  }
}

function argFunction() {
  var arg = document.getElementById("arg");
  var argc = document.getElementById("argc");
  var argBtn = document.getElementById("argBtn");

  if (intro.style.display === "none") {
    arg.style.display = "inline";
    argBtn.innerHTML = "...";
    argc.style.display = "none";
  } else {
    arg.style.display = "none";
    argBtn.innerHTML = "ocultar";
    argc.style.display = "inline";
  }
}

function top1Function() {
  var top1 = document.getElementById("top1");
  var top1c = document.getElementById("top1c");
  var top1Btn = document.getElementById("top1Btn");

  if (intro.style.display === "none") {
    top1.style.display = "inline";
    top1Btn.innerHTML = "...";
    argc.style.display = "none";
  } else {
    top1.style.display = "none";
    top1Btn.innerHTML = "ocultar";
    top1c.style.display = "inline";
  }
}

function refFunction() {
  var ref = document.getElementById("ref");
  var refc = document.getElementById("refc");
  var refBtn = document.getElementById("refBtn");

  if (intro.style.display === "none") {
    ref.style.display = "inline";
    refBtn.innerHTML = "...";
    refc.style.display = "none";
  } else {
    ref.style.display = "none";
    refBtn.innerHTML = "ocultar";
    refc.style.display = "inline";
  }
}

function argtFunction() {
  var argt = document.getElementById("argt");
  var argtc = document.getElementById("argtc");
  var argtBtn = document.getElementById("argtBtn");

  if (intro.style.display === "none") {
    argt.style.display = "inline";
    argtBtn.innerHTML = "...";
    argtc.style.display = "none";
  } else {
    argt.style.display = "none";
    argtBtn.innerHTML = "ocultar";
    argtc.style.display = "inline";
  }
}

function top2Function() {
  var top2 = document.getElementById("top2");
  var top2c = document.getElementById("top2c");
  var top2Btn = document.getElementById("top2Btn");

  if (intro.style.display === "none") {
    top2.style.display = "inline";
    top2Btn.innerHTML = "...";
    top2c.style.display = "none";
  } else {
    top2.style.display = "none";
    top2Btn.innerHTML = "ocultar";
    top2c.style.display = "inline";
  }
}

function ref2Function() {
  var ref2 = document.getElementById("ref2");
  var ref2c = document.getElementById("ref2c");
  var ref2Btn = document.getElementById("ref2Btn");

  if (intro.style.display === "none") {
    ref2.style.display = "inline";
    ref2Btn.innerHTML = "...";
    ref2c.style.display = "none";
  } else {
    ref2.style.display = "none";
    ref2Btn.innerHTML = "ocultar";
    ref2c.style.display = "inline";
  }
}

function argt2Function() {
  var argt2 = document.getElementById("argt2");
  var argt2c = document.getElementById("argt2c");
  var argt2Btn = document.getElementById("argt2Btn");

  if (intro.style.display === "none") {
    argt2.style.display = "inline";
    argt2Btn.innerHTML = "...";
    argt2c.style.display = "none";
  } else {
    argt2.style.display = "none";
    argt2Btn.innerHTML = "ocultar";
    argt2c.style.display = "inline";
  }
}

function top3Function() {
  var top3 = document.getElementById("top3");
  var top3c = document.getElementById("top3");
  var top3Btn = document.getElementById("top3Btn");

  if (intro.style.display === "none") {
    top3.style.display = "inline";
    top3Btn.innerHTML = "...";
    top3c.style.display = "none";
  } else {
    top3.style.display = "none";
    top3Btn.innerHTML = "ocultar";
    top3c.style.display = "inline";
  }
}

function intFunction() {
  var int = document.getElementById("int");
  var intc = document.getElementById("intc");
  var intBtn = document.getElementById("intBtn");

  if (intro.style.display === "none") {
    int.style.display = "inline";
    intBtn.innerHTML = "...";
    intc.style.display = "none";
  } else {
    int.style.display = "none";
    intBtn.innerHTML = "ocultar";
    intc.style.display = "inline";
  }
}

function legFunction() {
  var leg = document.getElementById("leg");
  var legc = document.getElementById("legc");
  var legBtn = document.getElementById("legBtn");

  if (intro.style.display === "none") {
    leg.style.display = "inline";
    legBtn.innerHTML = "...";
    legc.style.display = "none";
  } else {
    leg.style.display = "none";
    legBtn.innerHTML = "ocultar";
    legc.style.display = "inline";
  }
}

function silFunction() {
  var leg = document.getElementById("sil");
  var legc = document.getElementById("silc");
  var legBtn = document.getElementById("silBtn");

  if (intro.style.display === "none") {
    sil.style.display = "inline";
    silBtn.innerHTML = "...";
    silc.style.display = "none";
  } else {
    sil.style.display = "none";
    silBtn.innerHTML = "ocultar";
    silc.style.display = "inline";
  }
}

function insFunction() {
  var ins = document.getElementById("ins");
  var insc = document.getElementById("insc");
  var insBtn = document.getElementById("insBtn");

  if (intro.style.display === "none") {
    ins.style.display = "inline";
    insBtn.innerHTML = "...";
    insc.style.display = "none";
  } else {
    ins.style.display = "none";
    insBtn.innerHTML = "ocultar";
    insc.style.display = "inline";
  }
}

function famFunction() {
  var fam = document.getElementById("fam");
  var famc = document.getElementById("famc");
  var famBtn = document.getElementById("famBtn");

  if (intro.style.display === "none") {
    fam.style.display = "inline";
    famBtn.innerHTML = "...";
    famc.style.display = "none";
  } else {
    fam.style.display = "none";
    famBtn.innerHTML = "ocultar";
    famc.style.display = "inline";
  }
}

function basFunction() {
  var bas = document.getElementById("bas");
  var basc = document.getElementById("basc");
  var basBtn = document.getElementById("basBtn");

  if (intro.style.display === "none") {
    bas.style.display = "inline";
    basBtn.innerHTML = "...";
    basc.style.display = "none";
  } else {
    bas.style.display = "none";
    basBtn.innerHTML = "ocultar";
    basc.style.display = "inline";
  }
}

function desFunction() {
  var des = document.getElementById("des");
  var desc = document.getElementById("desc");
  var desBtn = document.getElementById("desBtn");

  if (intro.style.display === "none") {
    des.style.display = "inline";
    desBtn.innerHTML = "...";
    desc.style.display = "none";
  } else {
    des.style.display = "none";
    desBtn.innerHTML = "ocultar";
    desc.style.display = "inline";
  }
}

function preFunction() {
  var pre = document.getElementById("pre");
  var prec = document.getElementById("prec");
  var preBtn = document.getElementById("preBtn");

  if (intro.style.display === "none") {
    pre.style.display = "inline";
    preBtn.innerHTML = "...";
    prec.style.display = "none";
  } else {
    pre.style.display = "none";
    preBtn.innerHTML = "ocultar";
    prec.style.display = "inline";
  }
}

function consFunction() {
  var cons = document.getElementById("cons");
  var consc = document.getElementById("consc");
  var consBtn = document.getElementById("consBtn");

  if (intro.style.display === "none") {
    cons.style.display = "inline";
    consBtn.innerHTML = "...";
    consc.style.display = "none";
  } else {
    cons.style.display = "none";
    consBtn.innerHTML = "ocultar";
    consc.style.display = "inline";
  }
}

function invFunction() {
  var inv = document.getElementById("inv");
  var invc = document.getElementById("invc");
  var invBtn = document.getElementById("invBtn");

  if (intro.style.display === "none") {
    inv.style.display = "inline";
    invBtn.innerHTML = "...";
    invc.style.display = "none";
  } else {
    inv.style.display = "none";
    invBtn.innerHTML = "ocultar";
    invc.style.display = "inline";
  }
}

function repFunction() {
  var rep = document.getElementById("rep");
  var repc = document.getElementById("repc");
  var repBtn = document.getElementById("repBtn");

  if (intro.style.display === "none") {
    rep.style.display = "inline";
    repBtn.innerHTML = "...";
    repc.style.display = "none";
  } else {
    rep.style.display = "none";
    repBtn.innerHTML = "ocultar";
    repc.style.display = "inline";
  }
}

function midFunction() {
  var mid = document.getElementById("mid");
  var midc = document.getElementById("midc");
  var midBtn = document.getElementById("midBtn");

  if (intro.style.display === "none") {
    mid.style.display = "inline";
    midBtn.innerHTML = "...";
    midc.style.display = "none";
  } else {
    mid.style.display = "none";
    midBtn.innerHTML = "ocultar";
    midc.style.display = "inline";
  }
}

function tecFunction() {
  var tec = document.getElementById("tec");
  var tecc = document.getElementById("tecc");
  var tecBtn = document.getElementById("tecBtn");

  if (intro.style.display === "none") {
    tec.style.display = "inline";
    tecBtn.innerHTML = "...";
    tecc.style.display = "none";
  } else {
    tec.style.display = "none";
    tecBtn.innerHTML = "ocultar";
    tecc.style.display = "inline";
  }
}

function impFunction() {
  var imp = document.getElementById("imp");
  var impc = document.getElementById("impc");
  var impBtn = document.getElementById("impBtn");

  if (intro.style.display === "none") {
    imp.style.display = "inline";
    impBtn.innerHTML = "...";
    impc.style.display = "none";
  } else {
    imp.style.display = "none";
    impBtn.innerHTML = "ocultar";
    impc.style.display = "inline";
  }
}

function fecFunction() {
  var fec = document.getElementById("fec");
  var fecc = document.getElementById("fecc");
  var fecBtn = document.getElementById("fecBtn");

  if (intro.style.display === "none") {
    fec.style.display = "inline";
    fecBtn.innerHTML = "...";
    fecc.style.display = "none"; 
  } else {
    fec.style.display = "none";
    fecBtn.innerHTML = "ocultar";
    fecc.style.display = "inline";
  }
}

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

