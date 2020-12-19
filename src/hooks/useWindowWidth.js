import { useState, useEffect } from "react"

export const useWindowWidth = () => {
  let innerWidth
  if (typeof window !== undefined) {
    innerWidth = window.innerWidth
  }
  const [width, setWidth] = useState(innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(innerWidth)
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  })

  return width
}
