// FUNCÕES DO HEADER

function hiddenSideNav() {
  const hamburger = document.querySelector(".header__hamburguer");
  const sidenav = document.querySelector(".sidenav");
  const section = document.querySelector(".section");
  const siderLogo = document.querySelector(".sidenav__logo img");

  function hideSidenav() {
    sidenav.classList.replace("flex-2", "flex-1");
    sidenav.classList.toggle("hide");
    if (sidenav.classList.contains("hide")) {
      section.classList.replace("flex-10", "flex-11");
      siderLogo.setAttribute("src", "imagens/4.png");
    } else {
      sidenav.classList.replace("flex-1", "flex-2");
      section.classList.replace("flex-11", "flex-10");
      siderLogo.setAttribute("src", "imagens/2.png");
    }
  }

  hamburger.addEventListener("click", hideSidenav);
}
hiddenSideNav();

function ShowAndHideBox() {
  const arrowHeaderBox = document.querySelector(".header__user span");
  const headerBox = document.querySelector(".header__box");

  function handleHeaderBox() {
    headerBox.classList.toggle("ativo");
    arrowHeaderBox.classList.toggle("ativo");
  }

  arrowHeaderBox.addEventListener("click", handleHeaderBox);
}
ShowAndHideBox();

// FUNÇOES DA SECTION

const buscador = document.querySelector(".container__buscador");
const hideBuscadorIcon = document.querySelector(".hide__buscador");

if (buscador !== null) {
  function hiddenBuscador() {
    buscador.classList.add("ativo");

    function hideBuscador() {
      buscador.classList.toggle("ativo");
    }

    hideBuscadorIcon.addEventListener("click", hideBuscador);
  }
  hiddenBuscador();
}

// FUNÇÕES DO CHAT

function showerAndHiddenSuport() {
  const chat = document.querySelector(".chat");
  const suportPainel = document.querySelector(".suport");
  const hiddenIcon = document.querySelector(".hidensuport__icon");

  function showSuport() {
    suportPainel.classList.toggle("ativo");
    chat.classList.add("disable");
  }
  chat.addEventListener("click", showSuport);

  function hiddenSuport() {
    suportPainel.classList.remove("ativo");
    chat.classList.remove("disable");
  }

  hiddenIcon.addEventListener("click", hiddenSuport);
}
showerAndHiddenSuport();
