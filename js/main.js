'use strict'

// 주의할 점
// 1. html에서 js를 연결
// 2. html에서 js 라이브러리 연결 후 js를 연결할때, defer을 활용하여 먼저 해석
// 3. console.log로 오류 확인 가능

const badgeEl = document.querySelector('.badges')
console.log(badgeEl)
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    console.log('사라짐')
  } else {
    gsap.to(badgeEl, .2, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))