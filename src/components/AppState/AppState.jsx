import React from "react"
import { useToggle } from "@hooks"
import { AppContext } from "../../appState"

export function AppState({ children }) {
  const { isToggled, setIsToggled, toggle } = useToggle(true)

  function closeMenu() {
    setIsToggled(false)
  }
  function openMenu() {
    setIsToggled(true)
  }

  return (
    <AppContext.Provider
      value={{
        menuOpen: isToggled,
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
