import React from "react"
import { useToggle, useWindowWidth } from "@hooks"
import { AppContext } from "../../appState"

export function AppState({ children }) {
  const { isToggled, setIsToggled, toggle } = useToggle(false)
  const width = useWindowWidth()
  const menuOpenOrIsScreenXl = isToggled || width >= 1280

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
        closeMenu,
        openMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
