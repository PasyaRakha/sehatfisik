// Ambil elemen-elemen gambar yang akan diberi efek paralaks
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let img9 = document.getElementById("img9");
let img10 = document.getElementById("img10");
let img11 = document.getElementById("img11");
let judul = document.getElementById("judul");

// Fungsi untuk mengatur efek paralaks diagonal
function parallax() {
    let scrollY = window.scrollY;

    // Atur posisi gambar sesuai dengan nilai scroll pada sumbu X dan Y untuk gerakan diagonal
    img1.style.transform = "translate(" + scrollY * -0.5 + "px, " + scrollY * 0.5 + "px)";
    img2.style.transform = "translate(" + scrollY * 0.6 + "px, " + scrollY * 0.6 + "px)";
    img3.style.transform = "translate(" + scrollY * -0.4 + "px, " + scrollY * 0.5 + "px)";
    img4.style.transform = "translate(" + scrollY * 0.3 + "px, " + scrollY * 0.3 + "px)";
    img5.style.transform = "translate(" + scrollY * -0.5 + "px, " + scrollY * 0.5 + "px)";
    img6.style.transform = "translate(" + scrollY * -0.4 + "px, " + scrollY * 0.4 + "px)";
    img7.style.transform = "translate(" + scrollY * 0.6 + "px, " + scrollY * 0.6 + "px)";
    img8.style.transform = "translate(" + scrollY * -0.7 + "px, " + scrollY * 0.7 + "px)";
    img9.style.transform = "translate(" + scrollY * 0 + "px, " + scrollY * 0.3 + "px)";
    img10.style.transform = "translate(" + scrollY * 0.3 + "px, " + scrollY * 0.3 + "px)";
    img11.style.transform = "translate(" + scrollY * 0.2 + "px, " + scrollY * 0.2 + "px)";
    judul.style.transform = "translate(" + scrollY * 0 + "px, " + scrollY * 0.2 + "px)";
}

// Tambahkan event listener untuk menjalankan fungsi parallax saat halaman discroll
window.addEventListener("scroll", parallax);


document.getElementById("hamburger").addEventListener("click", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("active");
    this.classList.toggle("active");
});


function calculateBMI(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);

    let status = "";
    let message = "";
    
    if (bmi < 18.5) {
        status = "Underweight";
        message = "Kamu langsing bukan kurus, tapi jangan lupa perhatikan asupan nutrisi dan lakukan olahraga secara teratur.";
    } else if (bmi < 24.9) {
        status = "Normal weight";
        message = "Kamu sudah dalam kategori ideal! Jaga terus pola hidup sehatmu.";
    } else if (bmi < 29.9) {
        status = "Overweight";
        message = "Kamu mungkin memiliki asupan yang besar, namun perhatikan nutrisi dan pola makan sehat";
    } else {
        status = "Obese";
        message = "Jangan berkecil hati! Mulailah dengan pola makan sehat dan rutin berolahraga.";
    }

    document.getElementById('bmi-value').textContent = bmi;
    document.getElementById('bmi-status').textContent = status;

    const messageElement = document.getElementById('motivational-message');
    messageElement.textContent = message;

    // Reset animasi
    messageElement.classList.remove('visible');
    
    // Trigger ulang animasi
    setTimeout(() => {
        messageElement.classList.add('visible');
    }, 100);
}
