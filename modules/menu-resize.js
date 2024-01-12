const menuResize = () => {
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.querySelector(".backdrop");
    if (window.innerWidth >= 992) {
        if (sidebar.classList.contains("fechado")) {
            sidebar.classList.add("d-none");
        } else {
            sidebar.classList.add("fechado");
        }
        backdrop.classList.add("d-none");
        document.body.classList.remove("parado")
    }
}

export { menuResize };