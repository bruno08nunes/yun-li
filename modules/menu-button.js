const abrirMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.querySelector(".backdrop");

    sidebar.classList.toggle("fechado");
    sidebar.classList.remove("d-none");

    backdrop.classList.toggle("d-none");

    document.body.classList.toggle("parado")
}

export { abrirMenu };