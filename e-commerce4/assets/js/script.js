import ProductCard from "./ProductCard.js";
import TrendingCard from "./TrendingCard.js";


const navBar = document.querySelector(".header"),
    navBtn = document.querySelector(".header__btn"),
    sections = document.querySelectorAll("section[id]"),
    newContent = document.querySelector(".new__products"),
    shopContent = document.querySelector(".shop__products"),
    trendingContent = document.querySelector(".trending__products"),
    shopCategories = document.querySelectorAll(".shop__category"),
    circleBtn = document.querySelector(".go-down-btn"),
    scrollUpBtn = document.querySelector(".scroll-up");

const API_URL = "../assets/apis/products.json";

// initialize Scroll Reveal
const sr = ScrollReveal({ origin: "top", distance: "100px", duration: 2000, delay: 300 });

/* ============== Header ============== */

navBtn.addEventListener("click", () => document.body.classList.toggle("menu-toggled"))

function changeHeaderBg()
{
    
}


/* ============== Home Section ============== */

/* Swiper JS */


const homeSwiper = new Swiper(".home__content", {
    loop: true,
    effect: "fade",
    speed: 2000,
    allowTouchMove: false,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});

homeSwiper.on("slideChange", () => {
    const activeSlide = homeSwiper.slides[homeSwiper.activeIndex];
    activeSlide.classList.add("reveal");
});

homeSwiper.on("slideChangeTransitionEnd", () => {
    const prevSlide = homeSwiper.slides[homeSwiper.previousIndex];
    prevSlide.classList.remove("reveal");
});


/* Circle Btn */

    
let circleText = circleBtn.querySelector(".circle-text");
circleText.innerHTML = circleText.textContent
    .split("")
    .map((char, index) => `<span style="transform: rotate(${index * 28.3}deg)">${char}</span>`)
    .join("");



/* ============== New Section ============== */


    /* Swiper JS */
   

    /* ScrollReveal JS */
  

/* ============== Shop Section ============== */




/* Shop categories */


/* ============== Trending Section ============== */



/* ============== Brands Section ============== */

/* ScrollReveal JS */


/* ============== Footer ============== */

/* ScrollReveal JS */



/* ============== Active Scroll ============== */

function activeScroll()
{
}

/* ============== Scroll Up ============== */

function showScrollUpBtn() 
{
}


/* ============== Call functions ============== */


window.addEventListener("scroll", () => {});

window.addEventListener("load", () => {
    document.querySelector(".home__slide").classList.add("reveal")
})
