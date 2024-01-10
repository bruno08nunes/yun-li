import { abrirMenu, menuResize } from "../modules/menu.js";

const menu = document.querySelector(".btn_menu");
menu.addEventListener("click", abrirMenu);

window.addEventListener("resize", menuResize);