const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
      close.style.display = close.style.display === 'none' ? 'block' : 'none';
    });
gsap.registerPlugin(ScrollTrigger);
let cards = gsap.utils.toArray(".cards_item");
let mm = gsap.matchMedia();
mm.add("(min-width: 767px)", () => {
    gsap.to(cards, {
        xPercent: (i) => -i * 100 + (i > 0 ? 4.5 * i : 0),
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: ".section-card",
            pin: true,
            markers: false,
            scrub: 0.5,
            end: "+=6000 bottom",
        },
    });
});

