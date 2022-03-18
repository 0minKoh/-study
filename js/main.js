'use strict'

// 주의할 점
// 1. html에서 js를 연결
// 2. html에서 js 라이브러리 연결 후 js를 연결할때, defer을 활용하여 먼저 해석
// 3. console.log로 오류 확인 가능

const fadeEls1 = document.querySelectorAll('.background1 .fade-in')
console.log(fadeEls1)
fadeEls1.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})

const badgeEl = document.querySelector('.background1 .badges')
console.log(badgeEl)
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    gsap.to(badgeEl, .2, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))

const fadeEls2 = document.querySelectorAll('.background2 .fade-in')
console.log(fadeEls2)
// forEach(함수) - index 실행 순서
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    fadeEls2.forEach(function (fadeEl, index) {
      gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
      })
    })
  }
})

//swiper(슬라이드) 라이브러리 도움