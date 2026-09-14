const heroSection = document.querySelector('.hero-section');
const titleSpan = document.getElementById('title');

const slides = [
    {
        image: "../Assets/pbaic624o2121.png",
        name: "Eugene Bright – ‘ramen shop’"
    },
    {
        image: "../Assets/1371442.png",
        name: "patrika – ‘Serene Japanese’"
    },
    {
        image: "../Assets/1012229.png",
        name: "BlueTechWizard – ‘Enchanted Fantasy Castle’"
    },
    {
        image: "../Assets/1001575.png",
        name: "LOL – ‘Landscape in evening’"
    },
    {
        image: "../Assets/358929.jpg",
        name: "HAi – ‘Goose’"
    }
];

let currentIndex = 0;

function updateHeroContent() {
    heroSection.style.backgroundImage = `url('${slides[currentIndex].image}')`;
    titleSpan.textContent = slides[currentIndex].name;
    currentIndex = (currentIndex + 1) % slides.length;
}

updateHeroContent();

setInterval(updateHeroContent, 6000);
