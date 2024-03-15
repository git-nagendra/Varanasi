// Hamburger menu functionality
const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav_menu');

ham.addEventListener('click', () => {
  ham.classList.toggle('transform');
  nav.classList.toggle('mobile');
});

// Sticky header on scroll
const topHeader = document.querySelector('.Header_bg_color');

window.addEventListener('scroll', function () {
  if (window.scrollY <= 100) {
    topHeader.classList.remove('sticky');
  } else {
    topHeader.classList.add('sticky');
  }
});

// Tab functionality
const tabs = document.querySelectorAll('.tab_contant');
const tabBtns = document.querySelectorAll('.tabBtn li');

tabBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener('click', () => {
    tabBtns.forEach(otherActive => {
      otherActive.classList.remove('active');
    });
    tabBtn.classList.add('active');

    tabs.forEach(tabClass => {
      tabClass.classList.remove('active');
    });

    tabs[index].classList.add('active');
  });
});

tabBtns[0].click(); // Activate the first tab initially

// Carousel functionality
const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");
const carouselDom = document.querySelector(".carousel");
const SliderDom = carouselDom.querySelector(".carousel .list");
const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
const timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 5000;
let timeAutoNext = 8000;
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

// Loader functionality
const loader = document.querySelector('.loader');

window.addEventListener("load", (event) => {
  loader.style.display = "none";
});
