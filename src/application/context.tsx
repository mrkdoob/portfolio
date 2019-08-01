import React from "react"

export const AppContext = React.createContext({
  toggleTheme: (_theme: string) => {},
  theme: "",
})
