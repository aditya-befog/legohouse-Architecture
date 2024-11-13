const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.style.display =
    hamburger.style.display === "none" ? "block" : "none";
  close.style.display = close.style.display === "none" ? "block" : "none";
})
function loadSVG () {
    fetch("city.svg")
    .then((response) => { return response.text();})
    .then((svg) => {
        document.getElementById('bg_city').innerHTML = svg;
        document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
        setAnimationScroll();
    })
}
loadSVG();
function setAnimationScroll () {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.5
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        })
    ])
    .add([
        gsap.to("#building_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#wall_front", 2, {
            x: 200, y: 200,
            opacity: 0
        })
    ])
    .add([
        gsap.to("#interior_wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_side_2", 2, {
            opacity: 0
        }),
        gsap.to("#interior_wall_front", 2, {
            opacity: 0
        })
    ]);
}

const slides = document.querySelectorAll('.slide');
let currentIndexside = 0;

function showNextSlide() {
  slides[currentIndexside].classList.remove('active');
  currentIndexside = (currentIndexside + 1) % slides.length;
  slides[currentIndexside].classList.add('active');
}

setInterval(showNextSlide, 3000);

let currentIndex = 0;
const items = document.querySelectorAll(".work-photo-item");
const totalItems = items.length;

function showNextImage() {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add("active");
}

setInterval(showNextImage, 3000);

