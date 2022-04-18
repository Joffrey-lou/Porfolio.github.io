var r = document.querySelector(":root");
var position = 0;

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll <= 450) {
    position = 0;
  } else if (scroll <= 900) {
    position = 1;
  } else if (scroll <= 1350) {
    position = 2;
  } else if (scroll <= 1800) {
    position = 3;
  } else if (scroll <= 2250) {
    position = 4;
  }

  
  Define(position);
});

function Define(p1) {
    // Définie les changements de couleurs selon la valeur du paramètre 1
    Setcolor("--hm-color-","white");
    Setcolor("--cp-color-","white");
    Setcolor("--p1-color-","white");
    Setcolor("--p2-color-","white");
    Setcolor("--co-color-","white");

  switch (p1) {
    case 0:
      Setcolor("--hm-color-","yellow");
      break;
    case 1:
      Setcolor("--cp-color-","yellow");
      break;
    case 2:
      Setcolor("--p1-color-","yellow");
      break;
    case 3:
      Setcolor("--p2-color-","yellow");
      break;
    case 4:
      Setcolor("--co-color-","yellow");
      break;
  }
}

function Setcolor(p1,p2) {
 // colore la variables écrite en paramètre 1 et lui assigne la couleur passée en paramètre 2.
  r.style.setProperty(p1, p2);
}
