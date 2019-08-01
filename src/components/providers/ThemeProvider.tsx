import React, { FC } from "react"
import { useLocalStorage } from "@noquarter/hooks"
import { ThemeProvider as SCThemeProvider, defaultTheme } from "@noquarter/ui"
import { AppContext } from "../../application/context"
import { theme } from "../../application/theme"

const ThemeProvider: FC = ({ children }) => {
  const [currentTheme, setTheme] = useLocalStorage("theme", "dark")
  const toggleTheme = (theme: string) => setTheme(theme)

  return (
    <AppContext.Provider
      value={{
        theme: currentTheme,
        toggleTheme,
      }}
    >
      <SCThemeProvider
        theme={{ ...defaultTheme, ...theme(currentTheme === "dark") }}
      >
        {children}
      </SCThemeProvider>
    </AppContext.Provider>
  )
}

export default ThemeProvider
