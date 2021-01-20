import "whatwg-fetch"

// custom typefaces
import "fontsource-pt-sans"

import "./src/styles/base.css"
import "./src/styles/styles.scss"

import { getCoords, scrollToY } from "./src/utils"

export const shouldUpdateScroll = (props) => {
  const {
    routerProps: { location },
  } = props

  if (location?.state?.retainScrollPositionY) {
    return false
  }

  if (location?.state?.scrollTo) {
    const scrollToElement = document.querySelector(location.state.scrollTo)

    if (scrollToElement) {
      const { top } = getCoords(scrollToElement)
      scrollToY(top, 500)
      return false
    }
  }
}
