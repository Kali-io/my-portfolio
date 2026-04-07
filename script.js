// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Typing Effect for your Goal/Role
const textElement = document.querySelector(".hero-content p");
const text = "B.Tech IT Student at Anna University | Aspiring Full-stack Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Speed of typing
    }
}

// Clear the static text first and then start typing
window.onload = () => {
    textElement.innerHTML = ""; 
    typeWriter();
};

// 3. Navbar background change on scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "#000";
        nav.style.boxShadow = "0 2px 10px rgba(0, 173, 181, 0.5)";
    } else {
        nav.style.background = "#1a1a1a";
        nav.style.boxShadow = "none";
    }
});