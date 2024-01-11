import { abrirMenu, menuResize } from "../modules/menu.js";
import inserirAlbuns from "../modules/img-albuns.js";

const menu = document.querySelector(".btn_menu");
menu.addEventListener("click", abrirMenu);

window.addEventListener("resize", menuResize);

inserirAlbuns();

window.addEventListener("resize", e => { 
    if (window.innerWidth > 576 && document.querySelector("figure:nth-child(4) img").src === "http://127.0.0.1:5500/index.html") { 
        inserirAlbuns() 
    } 
});