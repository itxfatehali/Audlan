var menu = document.querySelector(".menu");
var clickicon = document.querySelector("nav i");
var main = document.querySelector(".main");
var closeicon = document.querySelector(".menu i");
clickicon.addEventListener("click", function(){
       menu.style.height ="100%";
       menu.style.width ="80%";
       menu.style.opacity ="1";
      main.style.opacity ="0.5";
  });
  closeicon.addEventListener("click", function(){
    menu.style.height ="0";
    menu.style.width ="0%";
    menu.style.opacity ="0";
   main.style.opacity ="1";
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect:"fade",
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  });
  var swiper = new Swiper(".mySwiper1", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
      loop:true,
    
    },
    loop:true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
  });
  var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    effect:Fade,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    loop:true,
 
  });
  var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();
  Shery.mouseFollower({
    //Parameters are optional.
});
Shery.makeMagnet("nav i , .menu-icon , nav a , .topbar h4 ,  .bottom-btn , a", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.imageMasker("#swiper-1 img", {

    mouseFollower: true,
    text: "HEY",
    fontFamily: "Poppins",

    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.textAnimate("nav a , nav i", {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco();  