/* ==========================================
   GALOOTECH PREMIUM SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initScrollReveal();
    initNavbar();
    initCounters();
    initSmoothScroll();
    initParallax();

});

/* ==========================================
   MENU MOBILE
========================================== */

function initMobileMenu() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = hamburger.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = hamburger.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(255,255,255,0.92)";
            navbar.style.backdropFilter = "blur(25px)";
            navbar.style.boxShadow = "0 10px 40px rgba(37,99,235,.15)";

        } else {

            navbar.style.background = "rgba(255,255,255,.75)";
            navbar.style.boxShadow = "0 10px 30px rgba(37,99,235,.08)";

        }

    });

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initScrollReveal() {

    const elements = document.querySelectorAll(
        ".service-card, .why-card, .portfolio-card, .testimonial-card, .stat-card"
    );

    elements.forEach(el => {
        el.classList.add("reveal");
    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });

}

/* ==========================================
   COMPTEURS ANIMÉS
========================================== */

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const speed = 100;

    const animateCounter = (counter) => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(() => animateCounter(counter), 20);

        } else {

            counter.innerText = target;

        }

    };

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    });

    counters.forEach(counter => {

        counter.innerText = "0";

        observer.observe(counter);

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 120,

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================
   PARALLAX HERO
========================================== */

function initParallax() {

    const heroImage = document.querySelector(".hero-image");

    if (!heroImage) return;

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.addEventListener("click", function(e){

    const button = e.target.closest(".btn-primary");

    if(!button) return;

    const circle = document.createElement("span");

    const diameter = Math.max(
        button.clientWidth,
        button.clientHeight
    );

    circle.style.width = circle.style.height =
        `${diameter}px`;

    circle.style.left =
        `${e.clientX - button.offsetLeft - diameter / 2}px`;

    circle.style.top =
        `${e.clientY - button.offsetTop - diameter / 2}px`;

    circle.classList.add("ripple");

    const ripple = button.querySelector(".ripple");

    if(ripple){
        ripple.remove();
    }

    button.appendChild(circle);

});

/* ==========================================
   PRELOADER (OPTIONNEL)
========================================== */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});

/* ==========================================
   CURRENT YEAR FOOTER
========================================== */

const yearElement = document.getElementById("year");

if(yearElement){

    yearElement.textContent =
        new Date().getFullYear();

}

/* ==========================================
   ACTIVE MENU LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active-link");

        }

    });

});

/* ==========================================
   PORTFOLIO FILTER (OPTIONNEL)
========================================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

const portfolioItems =
document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const filter =
        btn.getAttribute("data-filter");

        filterButtons.forEach(b =>
            b.classList.remove("active"));

        btn.classList.add("active");

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                }, 100);

            } else {

                item.style.opacity = "0";

                setTimeout(() => {
                    item.style.display = "none";
                }, 300);

            }

        });

    });

});
