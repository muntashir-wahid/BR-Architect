"use strict";

// HTML Elements

const navLinksEl = document.querySelectorAll(".nav_link");
const navBarEl = document.querySelector('nav');
const headerEl = document.querySelector('header');

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


// Sticky nav

const stickyNav = function(entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    navBarEl.classList.add('sticky-nav');
  } else {
    navBarEl.classList.remove('sticky-nav');
  };
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, 
  threshold: 0,
});

headerObserver.observe(headerEl);