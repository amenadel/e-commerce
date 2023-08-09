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
    async function renderNewProducts()
    {
        const respone = await fetch(API_URL);
        const data = await respone.json();
        data.map((product) => {
            if (product.isNew) {
                newContent.innerHTML += ProductCard(product);
            }
        });
        const productCards = newContent.querySelectorAll(".product-card");
        productCards.forEach((product) => {
            product.classList.add("new__product");
            const image = product.querySelector("img");
            product.addEventListener("mouseover", () => {
                if (product.dataset.image2 != "undefined") {
                    image.src = product.dataset.image2;
                }
            });
            product.addEventListener("mouseleave", () => {
                image.src = product.dataset.image1;
            });
        });
    } 
    
    /*Swiper*/

    const newSwiper = new Swiper(".new__content", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    })

    /* ScrollReveal JS */
    sr.reveal(newContent);

   


  

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

window.addEventListener("scroll", () => {
    activeScroll();
    changeHeaderBg();
    showScrollUpBtn();
});

window.addEventListener("load", () => {
    activeScroll();
    renderNewProducts();
    renderShopProducts();
    renderTrendingProducts();
    document.querySelector(".home__slide").classList.add("reveal");
});