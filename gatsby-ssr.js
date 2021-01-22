import React from "react"
import { AppState } from "@components"

export const wrapRootElement = ({ element }) => {
  return <AppState>{element}</AppState>
}
