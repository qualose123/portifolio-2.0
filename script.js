//SUBIR A TELA AO CLIQUE
function subirTela() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function AparecerButton() {
  if (window.scrollY === 0) {
    //ocutar div
    document.querySelector(".seta").style.display = "none";
  } else {
    //mostrar div
    document.querySelector(".seta").style.display = "block";
  }
}

window.addEventListener("scroll", AparecerButton);
