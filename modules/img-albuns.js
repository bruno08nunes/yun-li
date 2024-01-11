const inserirAlbuns = async () => {
    let albuns = await fetch("../assets/json/albuns.json").then(response => response.json());
    let seletor = window.innerWidth <= 576 ? "figure:not(:nth-child(n+4)) img" : ".article-albuns img";
    const imgs = document.querySelectorAll(seletor);
    const links = document.querySelectorAll(".article-albuns a");

    imgs.forEach( (img, key) => {
        let nomeAlbum = albuns[key]["nome"].toLowerCase().replace(" ", "-").replace(" ", "-");
        img.src = `../assets/images/${nomeAlbum}.jpg`;
        img.alt = `Álbum ${albuns[key]["nome"]} do ${albuns[key]["criador"]}`;
        img.title = albuns[key]["nome"];
        links[key].href = albuns[key]["link"] ?? "javascript:void(0)";
        if (links[key].href.startsWith("https:")) {
            links[key].target = "_blank";
        }
    } )
}
export default inserirAlbuns;