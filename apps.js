const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    { id: 1, title: "Air Force", img: "./img/air.png" },
    { id: 2, title: "Air Jordan", img: "./img/jordan.png" },
    { id: 3, title: "Blazer", img: "./img/blazer.png" },
    { id: 4, title: "Crater", img: "./img/crater.png" },
    { id: 5, title: "Hippie", img: "./img/hippie.png" },
];

// Add click events to menu items
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log(`Menu item ${index} clicked`); // Debug
        wrapper.style.transform = `translateX(${-100 * index}vw)`; // Slide
    });
});
