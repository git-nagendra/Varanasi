


var ham =document.querySelector('.ham');
var nav =document.querySelector('.nav_menu')
console.log(nav);
ham.addEventListener('click',()=>{
  ham.classList.toggle('transform');
  nav.classList.toggle('mobile');
})
var topHeader =document.querySelector('.Header_bg_color');
console.log(topHeader);
window.addEventListener('scroll', function(){
  if (window.scrollY <= 100) {
    topHeader.classList.remove('sticky');
  }
  else{
    topHeader.classList.add('sticky');
  }
   
   
});


const tabs = document.querySelectorAll('.tab_contant');
console.log(tabs);
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

tabBtns[0].click();





let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 5000;
let timeAutoNext = 8000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

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

const loder =document.querySelector('.loder');
console.log(loder);
window.onload = function() {
  loder.style.display="none";
}


