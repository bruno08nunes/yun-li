const menuResize = () => {
    const sidebar = document.querySelector(".sidebar");
    if (window.innerWidth >= 992) {
        if (sidebar.classList.contains("fechado")) {
            sidebar.classList.add("d-none");
        } else {
            sidebar.classList.add("fechado");
        }
    }
}

export { menuResize };