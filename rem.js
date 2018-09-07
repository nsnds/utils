let docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc () {
  let clientWidth = docEl.clientWidth
  if (!clientWidth) return
  else if (clientWidth > 640) {
    docEl.style.fontSize = '34px'
  } else {
    docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
  }
}

if (!document.addEventListener) return
window.addEventListener(resizeEvt, recalc, false)
document.addEventListener('DOMContentLoaded', recalc, false)