// post-it sobre
document.getElementById("sobre").addEventListener("click", function () {
  var modal = document.getElementById("sobreAlert");
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

// post-it acervo pessoal
document.getElementById("user2").addEventListener("click", function () {
  var modal = document.getElementById("user2Alert");
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

function verificarCredencial() {
  var usuario = document.getElementById("username").value;
  var senha = document.getElementById("password").value;

  if (usuario === "marialuzia" && senha === "txtenem") {
    window.location.href = "./../pessoal/pessoal.html";
  } else {
    alert("Credenciais inválidas");
  }

  return false;
}

function cadastroAlerta() {
  alert("Lamentamos! Servidores indisponíveis :(");
}
