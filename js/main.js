// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');
// const iconsEl = searchEl.querySelector('.material-icons');

// searchEl.addEventListener('click', () => {
//   searchInputEl.focus();
// });

// searchInputEl.addEventListener('focus', () => {
//   searchEl.classList.add('focused');
//   searchInputEl.setAttribute('placeholder', '통합검색');
// });

// searchInputEl.addEventListener('blur', () => {
//   searchEl.classList.remove('focused');
//   searchInputEl.setAttribute('placeholder', '');
// });

const searchEl = document.querySelector('.search-wrap');

searchEl.addEventListener('click', () => {
  searchEl.focus();
})


const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(() => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //gasp.to(애니메이션을 적용할 요소, 지속시간, 옵션)
    gsap.to('header .badges', 0.25, {
      display: 'none',
      opacity: 0
    });
    gsap.to(toTopEl, 0.25, {
      y: 0,
    });
  } else {
    gsap.to('header .badges', 0.25, {
      display: 'block',
      opacity: 1
    });
    gsap.to(toTopEl, 0.25, {
      y: 100,
    })
  }
}, 300));

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.75, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: 5.5 + ((-5) / (index + 1)),
    opacity: 1
  });
});


new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})


new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next',
  },
})

new Swiper('.awards .swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,

  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next',
  },
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}
floatingObj('.floating1', 1, 15);
floatingObj('.floating2', 0.5, 15);
floatingObj('.floating3', 1.5, 20);


//뷰포트 위치에 따라서 움직이는 요소
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여질 요소를 지정
      triggerHook: 0.75,     //뷰포트의 어디 지점에 왔을 때 발동할 것인가
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


//올해 년수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();