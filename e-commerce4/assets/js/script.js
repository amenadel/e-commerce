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


/* Circle Btn */

    circleBtn = document.querySelector(".go-down-btn"),
    circleText = circleBtn.querySelector(".circle-text");
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



/* ============== Scroll Up ============== */



/* ============== Call functions ============== */




