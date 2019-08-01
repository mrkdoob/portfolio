import React, { memo, useContext } from "react"

import { Button, styled } from "@noquarter/ui"
import { AppContext } from "../application/context"

const ThemeSwitcher = () => {
  const context = useContext(AppContext)
  return (
    <ButtonContainer>
      <Button
        onClick={() =>
          context.toggleTheme(context.theme === "dark" ? "light" : "dark")
        }
      >
        {context.theme === "dark" ? "🌚 toggle theme" : "🌝 toggle theme"}
      </Button>
    </ButtonContainer>
  )
}

export default memo(ThemeSwitcher)

const ButtonContainer = styled.div`
  position: absolute;
  bottom: ${props => props.theme.paddingL};
  left: ${props => props.theme.paddingL};
`
