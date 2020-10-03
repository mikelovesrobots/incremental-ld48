import React from "react"
import styled from "@emotion/styled"
import { colors } from "styles"

const HeaderBackground = styled.div({
  width: "100%",
  height: "min(50vh, 540px)",
  overflow: "hidden",
  transformOrigin: 0,
  position: "absolute",
  zIndex: -1,
  top: 0,
})

const HeaderGradient: React.FunctionComponent = () => {
  return (
    <HeaderBackground
      style={{
        background: `linear-gradient(to bottom, ${colors.headerGradient[0]} 40%, ${colors.headerGradient[1]} 100%`,
      }}
    />
  )
}

export default HeaderGradient
