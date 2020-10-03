import React from "react"
import globalStyles from "styles/globalStyles"
import { Global } from "@emotion/core"
import { Helmet } from "react-helmet"
import HeaderGradient from "./HeaderGradient"

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
          alignItems: "center",
        }}
      >
        <HeaderGradient />
        <div css={{ flex: "1 1 auto" }}>{children}</div>
      </div>
    </>
  )
}

export default Layout
