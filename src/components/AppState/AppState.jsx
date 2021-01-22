import React from "react"
import { useToggle, useWindowWidth } from "@hooks"
import { AppContext } from "../../appState"

export function AppState({ children }) {
  const { isToggled, setIsToggled, toggle } = useToggle(false)
  const width = useWindowWidth()
  const isScreenXl = width >= 1280
  const menuOpenOrIsScreenXl = isToggled || isScreenXl

  function closeMenu() {
    setIsToggled(false)
  }
  function openMenu() {
    setIsToggled(true)
  }

  return (
    <AppContext.Provider
      value={{
        menuOpen: menuOpenOrIsScreenXl,
        toggleMenu: toggle,
        isScreenXl,
        closeMenu,
        openMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
