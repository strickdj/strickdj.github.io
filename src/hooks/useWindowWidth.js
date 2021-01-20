import { useState, useEffect } from "react"

export const useWindowWidth = () => {
  let innerWidth
  if (typeof window !== undefined) {
    innerWidth = window.innerWidth
  }
  const [width, setWidth] = useState(innerWidth)

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.currentTarget.innerWidth)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })

  return width
}
