import { abrirMenu, menuResize } from "../modules/menu.js";
import inserirAlbuns from "../modules/img-albuns.js";

const menu = document.querySelector(".btn_menu");
menu.addEventListener("click", abrirMenu);

window.addEventListener("resize", menuResize);

inserirAlbuns();

window.addEventListener("resize", e => { 
    if (window.innerWidth > 576 && !(document.querySelector("figure:nth-child(4) img").src.endsWith("jpg"))) { 
        inserirAlbuns() 
        console.log(document.querySelector("figure:nth-child(4) img").src)
    } 
});

const backdrop = document.querySelector(".backdrop");
backdrop.addEventListener("click", abrirMenu);