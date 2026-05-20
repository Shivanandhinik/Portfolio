// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close navbar when clicking menu links

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===============================
// STICKY HEADER EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";

    }
    else{

        header.style.background = "rgba(255,255,255,0.8)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
    }

});


// ===============================
// ACTIVE NAVBAR LINKS
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active-link");
        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card, .experience-card, .about-text"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);


// Run once on page load
revealOnScroll();


// ===============================
// TYPING EFFECT FOR HERO SECTION
// ===============================

const roles = [
    "Aspiring Web Developer",
    "Frontend Developer",
    "Java Programmer",
    "Creative UI Designer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-content h2");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }
    else{

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }
    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

// Start typing animation
typingElement.textContent = "";
typeEffect();


// ===============================
// SMOOTH FADE-UP EFFECT
// ===============================

const style = document.createElement("style");

style.innerHTML = `
    .skill-card,
    .project-card,
    .contact-card,
    .experience-card,
    .about-text{

        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease;
    }

    .show{

        opacity: 1;
        transform: translateY(0);
    }

    .active-link{

        color: #6c63ff !important;
        font-weight: 600;
    }
`;

document.head.appendChild(style);


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// Ripple Style

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

.btn{
    position: relative;
    overflow: hidden;
}

.ripple{
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.7);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
}

@keyframes ripple-effect{

    to{
        transform: scale(15);
        opacity: 0;
    }

}
`;

document.head.appendChild(rippleStyle);

// ==============================
// DARK MODE TOGGLE
// ==============================

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }
    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});


// ==============================
// SCROLL PROGRESS BAR
// ==============================

const progressBar = document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + "%";

});


// ==============================
// PARALLAX EFFECT
// ==============================

window.addEventListener("mousemove", (e) => {

    document.querySelectorAll(".blob").forEach((blob, index) => {

        const speed = (index + 1) * 0.01;

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        blob.style.transform =
        `translate(${x}px, ${y}px)`;

    });

});