const themeButton = document.getElementById("theme-button");
const anotherButton = document.getElementById("another-button");
const body = document.body;
const bulbIcon = document.querySelector(".bulb-icon");
const otherIcon = document.querySelector(".other-icon");

themeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        bulbIcon.innerHTML = '<i class="fa-solid fa-lightbulb fa-2xl fa-rotate-180" style="color: #fff700;"></i>';
        otherIcon.innerHTML = '<i class="fa-solid fa-toggle-on fa-xl"></i>';
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        bulbIcon.innerHTML = '<i class="fa-regular fa-lightbulb fa-2xl fa-rotate-180"></i>';
        otherIcon.innerHTML = '<i class="fa-solid fa-toggle-off fa-xl"></i>';
    }
});