"use strict";

// HTML Elements

const navLinksEl = document.querySelectorAll(".nav_link");
const navBarEl = document.querySelector("nav");
const headerEl = document.querySelector("header");
const [, navMenuEl, toggleBtnEl] = document.querySelectorAll(".nav-items");


// Responsive navbar
const responsiveNav = function () {

  // Functions
  const toggleNav = function () {
    navMenuEl.classList.toggle("show-nav");
  };

  const hideNavMenuOnEachClick = function (e) {
    const navLinks = e.target.classList.contains("nav_link");

    // Guard clause
    if (!navLinks) return;

    // Hide nav menu when click on a link
    navMenuEl.classList.remove("show-nav");
  };

  // Event Listeners
  toggleBtnEl.addEventListener("click", toggleNav);
  navMenuEl.addEventListener("click", hideNavMenuOnEachClick);
};
responsiveNav();


// Sticky nav
const stickyNav = function () {

  // Callback function for the Intersection observer api
  const toggleStickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      navBarEl.classList.add("sticky-nav");
    } else {
      navBarEl.classList.remove("sticky-nav");
    }
  };

  // Header Observer
  const headerObserver = new IntersectionObserver(toggleStickyNav, {
    root: null,
    threshold: 0,
  });

  headerObserver.observe(headerEl);
};
stickyNav();


// Smooth scroll
navLinksEl.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionScrollTo = document.querySelector(link.getAttribute("href"));

    /*
    // Old schoole way
    const sectionCoordinate = sectionScrollTo.getBoundingClientRect();
    window.scrollTo({
      top: sectionCoordinate.top + window.pageYOffset,
      left: sectionCoordinate.right + window.pageXOffset,
      behavior: 'smooth',
    });

    */

    sectionScrollTo.scrollIntoView({
      behavior: "smooth",
    });
  });
});

