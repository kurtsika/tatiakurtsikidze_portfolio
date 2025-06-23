document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuOpenIcon = document.querySelector(".nav__icon-menu"),
    menuCloseIcon = document.querySelector(".nav__icon-close"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Theme Switcher
  ======================================================= */
  menuOpenIcon.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  toggleTheme.addEventListener("click", () => {
    darkMode();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }

  function menuClose() {
    menuList.classList.remove("is-open");
  }


  // Theme Switcher
  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  }

  // Scroll to top
  if (btnScrollToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        btnScrollToTop.classList.add("is-visible");
      } else {
        btnScrollToTop.classList.remove("is-visible");
      }
    });

    btnScrollToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  }

  // On page load
  window.addEventListener('load', () => {
    if (window.pageYOffset > 50) {
      btnScrollToTop.classList.add("is-visible");
    }
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* ==========================
  // Lightbox Gallery
  ========================== */
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    moreLength: 0,
    autoplayVideos: true
  });


  /* =================================
  // Smooth scroll to the tags page
  ================================= */
  document.querySelectorAll(".tag__link").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

});