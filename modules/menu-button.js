const abrirMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("fechado");
    sidebar.classList.remove("d-none");
}

export { abrirMenu };