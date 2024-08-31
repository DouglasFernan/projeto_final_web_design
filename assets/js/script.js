let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const pointers = document.querySelectorAll(".pointer");

function mudarSlide(index) {
    currentIndex = index;
    const marginLeft = `${currentIndex * -100}%`;
    document.querySelector(".sliders").style.marginLeft = marginLeft;
    updatePointers();
}

function updatePointers() {
    pointers.forEach((pointer, index) => {
        pointer.style.backgroundColor =
            index === currentIndex ? "yellow" : "black";
    });
}

function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        const marginLeft = `${currentIndex * -100}%`;
        document.querySelector(".sliders").style.marginLeft = marginLeft;
        updatePointers();
    }, 3000); // 3 segundos (3000 milissegundos) de intervalo entre cada transição
}
//teste
startCarousel();