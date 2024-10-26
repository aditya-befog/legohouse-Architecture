const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
      close.style.display = close.style.display === 'none' ? 'block' : 'none';
    });

document.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset; 
  
    const mainSection = document.querySelector(".main");
    const imageLeft = document.querySelector(".image-left");
    const imageCenter = document.querySelector(".image-center");
    const imageRight = document.querySelector(".image-right");
  
    if (scrollPosition > 100) {
      mainSection.classList.add("shrink");
    } else {
      mainSection.classList.remove("shrink");
    }

    const leftImageOffset = Math.max(10 - scrollPosition * 0.5, -250);
    const rightImageOffset = Math.max(10 - scrollPosition * 0.5, -250);
    
    const centerImageOffset = Math.min(-250 + scrollPosition * 0.5, 0);
 
    imageLeft.style.transform = `translateY(${leftImageOffset}%)`;
    imageRight.style.transform = `translateY(${rightImageOffset}%)`;
    imageCenter.style.transform = `translateY(${centerImageOffset}%)`;
  
  });
  gsap.registerPlugin(ScrollTrigger);

  if (window.innerWidth <= 768) {
    startMobileScroll();
  }
  
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

