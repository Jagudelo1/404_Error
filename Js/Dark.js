const themeButton = document.getElementById("theme-button");
const body = document.body;

themeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeButton.textContent = "Claro";
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeButton.textContent = "Oscuro";
    }
});