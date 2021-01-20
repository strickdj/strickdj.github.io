export function getCoords(elem) {
  const box = elem.getBoundingClientRect()

  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0

  const top = box.top + scrollTop - clientTop
  const left = box.left + scrollLeft - clientLeft

  return { top: Math.round(top), left: Math.round(left) }
}

export function easeInOutQuad(t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export function scrollToY(to, duration) {
  const top = getScrollPositionY()
  const change = to - top
  const increment = 20

  let currentTime = 0

  const animateScroll = function () {
    currentTime += increment
    const y = easeInOutQuad(currentTime, top, change, duration)
    window.scrollTo(0, y)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

export function getScrollPositionY() {
  const doc = document.documentElement
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
}
