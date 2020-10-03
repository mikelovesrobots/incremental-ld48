import React from "react"
import globalStyles from "styles/globalStyles"
import { Global } from "@emotion/core"
import { Helmet } from "react-helmet"
import HeaderGradient from "./HeaderGradient"

import styled from "@emotion/styled"
import { padding, margin } from "styles"

const Container = styled.div({
  ...padding.x(24),
  ...margin.x("auto"),
  maxWidth: 1200,
})

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Helmet
        defaultTitle="Infinitely Worse - An Adventure!"
        titleTemplate={`%s - Infinitely Worse`}
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            name: "description",
            content:
              "Infinitely Worse - An Adventure is an incremental game built for Ludum Dare.",
          },
        ]}
      />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <HeaderGradient />
        <div css={{ flex: "1 1 auto" }}>
          <Container>{children}</Container>
        </div>
      </div>
    </>
  )
}

export default Layout
