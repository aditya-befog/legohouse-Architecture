document.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset; // Get the current scroll position
  
    // Select the elements
    const mainSection = document.querySelector(".main");
    const imageLeft = document.querySelector(".image-left");
    const imageCenter = document.querySelector(".image-center");
    const imageRight = document.querySelector(".image-right");
  
    // Shrink the main section based on scroll position
    if (scrollPosition > 100) {
      mainSection.classList.add("shrink");
    } else {
      mainSection.classList.remove("shrink");
    }
  
    // Left and right image movement based on scroll
    const leftImageOffset = Math.max(10 - scrollPosition * 0.5, -250);  // Moves the left image up
    const rightImageOffset = Math.max(10 - scrollPosition * 0.5, -250); // Moves the right image up
    
    // Center image moves independently from top to center
    const centerImageOffset = Math.min(-250 + scrollPosition * 0.5, 0); // Moves center image from top to 0
  
    // Apply the transforms based on scroll position, keeping them separate
    imageLeft.style.transform = `translateY(${leftImageOffset}%)`;
    imageRight.style.transform = `translateY(${rightImageOffset}%)`;
    imageCenter.style.transform = `translateY(${centerImageOffset}%)`;
  
    // Ensure smooth animation during scrolling, without overlapping positions
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

window.addEventListener('scroll', function() {
    const servicesCon = document.querySelector('.services-con');
    const services = document.querySelector('.Services');
    const quality = document.querySelector('.quality');
    const featureTitle = document.querySelector('.feature-title');
    const featuresContainer = document.querySelector('.features-container');
    const lastImage = document.querySelector('.image:last-child');
    
    const servicesConTop = servicesCon.getBoundingClientRect().top;
    const featuresConTop = featuresContainer.getBoundingClientRect().top;
  
    if (servicesConTop < window.innerHeight - 100) {
      services.classList.add('show');
      quality.classList.add('show');
      featureTitle.classList.add('show');
    }
  
    if (featuresConTop < window.innerHeight - 100) {
      featuresContainer.classList.add('show');
      lastImage.classList.add('show-bottom');
    }
  });
  