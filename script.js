"use strict";

// HTML Elements

const navLinksEl = document.querySelectorAll(".nav_link");

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
