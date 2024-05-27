// Daftar tumbuhan dan kutipan
const plants = [
    { name: "Mawar", image: "mawar.jpg" },
    { name: "Melati", image: "melati.jpg" },
    { name: "Anggrek", image: "anggrek.jpg" },
    // Tambahkan tumbuhan lain di sini
];

const quotes = [
    "Kamu seperti bunga yang selalu mekar di hatiku.",
    "Kehadiranmu bagaikan sinar matahari yang menyinari hari-hariku.",
    "Cintaku padamu bagaikan air yang mengalir tak pernah berhenti.",
    // Tambahkan kutipan lain di sini
];

// Fungsi untuk menampilkan tumbuhan
function displayPlants() {
    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";
    plants.forEach(plant => {
        const plantDiv = document.createElement("div");
        plantDiv.classList.add("plant");
        const img = document.createElement("img");
        img.src = `images/${plant.image}`;
        img.alt = plant.name;
        plantDiv.appendChild(img);
        plantContainer.appendChild(plantDiv);
    });
}

// Fungsi untuk menampilkan kutipan
function displayQuote() {
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = "";
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quotePara = document.createElement("p");
    quotePara.textContent = randomQuote;
    quoteContainer.appendChild(quotePara);
}

// Panggil fungsi untuk menampilkan tumbuhan dan kutipan saat halaman dimuat
window.onload = function() {
    displayPlants();
    displayQuote();
};
