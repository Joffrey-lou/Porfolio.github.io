var r = document.querySelector(":root");
var position = 0;
let hrElement;
let counter = 100;

// defini la section ou se trouve l'utilisateur
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll <= 500) {
    position = 0;
  } else if (scroll <= 1250) {
    position = 1;
  } else if (scroll <= 1900) {
    position = 2;
  } else if (scroll <= 2400) {
    position = 3;
  } else if (scroll <= 2500) {
    position = 4;
  }
  Define(position);
});

// Définie les changements de couleurs selon la valeur du paramètre 1
function Define(p1) {
  setParameter("--hm-color-", "white");
  setParameter("--cp-color-", "white");
  setParameter("--p1-color-", "white");
  setParameter("--p2-color-", "white");
  setParameter("--co-color-", "white");

  switch (p1) {
    case 0:
      setParameter("--hm-color-", "yellow");
      break;
    case 1:
      setParameter("--cp-color-", "yellow");
      break;
    case 2:
      setParameter("--p1-color-", "yellow");
      break;
    case 3:
      setParameter("--p2-color-", "yellow");
      break;
    case 4:
      setParameter("--co-color-", "yellow");
      break;
  }
}

// colore la variables écrite en paramètre 1 et lui assigne la valeur passée en paramètre 2.
function setParameter(p1, p2) {
  r.style.setProperty(p1, p2);
}

let cycle = 1;

// affiche les diferrent fichier html/css/javascrypt dans las section project 1
function changeText() {
  cycle++;
  switch (cycle) {
    case 1:
      document.getElementById("code").src = "html.txt";
      document.getElementById("change_txt").value = "CSS";
      document.getElementById("change_txt").style.backgroundColor ="cornflowerblue";
      break;
    case 2:
      document.getElementById("code").src = "css/style.css";
      document.getElementById("change_txt").value = "Javascript";
      document.getElementById("change_txt").style.backgroundColor = "green";
      break;
    case 3:
      document.getElementById("code").src = "script/javascript.js";
      document.getElementById("change_txt").value = "HTML";
      document.getElementById("change_txt").style.backgroundColor = "orange";
      cycle = null;
      break;
  }
}

function design_0() {
  (r.style.backgroundImage = "url(img/background/background_0.jpg)"),"no-repeat","center","fixed";
  setParameter("--border-color-", "green");
  setParameter("--box-background-", "rgba(0, 0, 0,0.4)");
  setParameter("--text-color-", "white");
  setParameter("--animation-name-", "none");
  return;
}

function design_1() {
   (r.style.backgroundImage = "url(img/background/background_1.jpg)"),"no-repeat","center","fixed";
   setParameter("--border-color-", "rgb(136, 136, 231)");
   setParameter("--box-background-", "rgba(153, 153, 153, 0.247)");
   setParameter("--text-color-", "black");
   setParameter("--animation-name-", "none");
  return;
}

function design_2() {
  (r.style.backgroundImage = "url(img/background/background_2.jpg)"),"no-repeat","center","fixed";
  setParameter("--border-color-", "white");
  setParameter("--box-background-", "rgba(0, 0, 0, 0.823)");
  setParameter("--text-color-", "white");
  setParameter("--animation-name-", "none");
  return;
}

function design_3() {
  (r.style.backgroundImage = "url(img/background/background_3.jpg)"),"no-repeat","center","fixed";
  setParameter("--border-color-", "white");
  setParameter("--box-background-", "rgba(0, 0, 0, 0.223)");
  setParameter("--text-color-", "white");
  setParameter("--animation-name-", "neon");
  return;
}
