document.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    const mainSection = document.querySelector(".main");
    const imageLeft = document.querySelector(".image-left");
    const imageCenter = document.querySelector(".image-center");
    const imageRight = document.querySelector(".image-right");
    const servicesSection = document.querySelector(".services-section");

    if (scrollPosition > 100) {
        mainSection.classList.add("shrink");
        [imageLeft, imageCenter, imageRight].forEach(image => {
            image.classList.add("active");
        });
    } else {
        mainSection.classList.remove("shrink");
        [imageLeft, imageCenter, imageRight].forEach(image => {
            image.classList.remove("active");
        });
    }

    if (scrollPosition > 500) {
        servicesSection.classList.add("active");
    } else {
        servicesSection.classList.remove("active");
    }
});

const cardsWrapper = gsap.utils.toArray(".cards_item");
const cardEl = gsap.utils.toArray(".cards_el");

cardsWrapper.forEach((e, i) => {
    const card = cardEl[i];
    let scale = 1;
    let rotate = 0;

    if (i !== cardEl.length - 1) {
        scale = 0.9 + 0.025 * i;
        rotate = -10;
    }

    gsap.to(card, {
        scale: scale,
        rotationX: rotate,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
            trigger: e,
            start: `top ${70 + 40 * i}px`,
            end: "bottom +=650px",
            endTrigger: ".end-anim",
            pin: e,
            pinSpacing: false,
            scrub: true
        }
    });
});

// Optionally, if using Lenis (smooth scrolling)
const lenis = new Lenis();
lenis.on('scroll', () => ScrollTrigger.update());

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

