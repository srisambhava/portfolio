/*==============================
 MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/*==============================
 SCROLL REVEAL
==============================*/

const fadeElements = document.querySelectorAll(".fade-up");

function revealElements() {

    fadeElements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        if (position < window.innerHeight - 120) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


/*==============================
 ACTIVE NAVBAR LINK
==============================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==============================
 TYPING EFFECT
==============================*/

const typingElement = document.querySelector(".hero h2");

const words = [

    "Java Full Stack Developer",

    "Spring Boot Developer",

    "Backend Developer",

    "Frontend Developer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


/*==============================
 NAVBAR SHADOW
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/*==============================
 BACK TO TOP
==============================*/

const topButton = document.createElement("div");

topButton.className = "back-top";

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
 BUTTON RIPPLE EFFECT
==============================*/

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});


/*==============================
 PROFILE IMAGE TILT
==============================*/

const profile = document.querySelector(".profile-circle");

if(profile){

profile.addEventListener("mousemove",(e)=>{

    const rect = profile.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    profile.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform="rotateX(0) rotateY(0)";

});

}


/*==============================
 SKILL CARD ANIMATION
==============================*/

const skillCards=document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.06)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


/*==============================
 PROJECT CARD ANIMATION
==============================*/

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*==============================
 YEAR AUTO UPDATE
==============================*/

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Sri Sambhava Krishna`;

}


/*==============================
 CONSOLE MESSAGE
==============================*/

console.log(
"%cPortfolio Developed by Sri Sambhava Krishna",
"color:#00bfff;font-size:16px;font-weight:bold;"
);