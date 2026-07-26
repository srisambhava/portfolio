/* ===========================================
   PORTFOLIO SCRIPT
   PART 1
   Mobile Menu + Typing Effect + Active Navbar
=========================================== */

// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

// ==============================
// Typing Animation
// ==============================

const typingText = document.getElementById("typing");

const professions = [

    "Java Full Stack Developer",

    "Spring Boot Developer",

    "Frontend Developer",

    "Software Engineer"

];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    let current = professions[professionIndex];

    if (!deleting) {

        typingText.textContent =
            current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 110
    );

}

typingEffect();

// ==============================
// Active Navbar on Scroll
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});
/* ===========================================
   PORTFOLIO SCRIPT
   PART 2
   Scroll Reveal + Counter + Back To Top
   Navbar Shadow + Current Year
=========================================== */

// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const updateCounter = () => {

            count += increment;

            if (count >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

    });

    counterStarted = true;

}

window.addEventListener("scroll", () => {

    const achievement = document.querySelector(".achievement");

    if (!achievement) return;

    const top = achievement.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        startCounter();

    }

});

// ==============================
// Back To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==============================
// Current Year
// ==============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ==============================
// Smooth Scroll for Anchor Links
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});