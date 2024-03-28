
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

//slider
const slider = document.querySelector(".slider");
function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}
function autoSlide() {
  const nextButton = document.querySelector(".next");
  nextButton.click(); 
}
setInterval(autoSlide, 5000);
document.addEventListener("click", activate, false);


// Loader functionality
const loader = document.querySelector('.loader');

window.addEventListener("load", (event) => {
  loader.style.display = "none";
});
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

  // Trigger click event only for the first button
  if (index === 0) {
    tabBtn.click();
  }
});
