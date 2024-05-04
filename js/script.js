const menuicon = document.getElementById("menu-icon"); //
const menulist = document.getElementById("menu-list");

menuicon.addEventListener("click", () => {
    menulist.classList.toggle("hidden");
    console.log(menuicon.classList);
});

const text = document.querySelector(".slider .text.sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    }, 4000);
};

        // Initial call to start the process
        textLoad();

        // Repeat the process every 8 seconds (4000ms for each text + 4000ms delay)
        setInterval(textLoad, 8000);
