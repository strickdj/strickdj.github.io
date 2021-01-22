import React from "react"

export const AppContext = React.createContext({
  menuOpen: false,
})

export const useAppState = () => React.useContext(AppContext)
