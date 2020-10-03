import React, { useState } from "react"
import Layout from "components/layout"
import { typography } from "styles"
import styled from "@emotion/styled"
import { useInterval } from "beautiful-react-hooks"

const Headline = styled.h1({ ...typography.headline1 })
const Profits = styled.p({ ...typography.body })

const IndexPage: React.FunctionComponent = () => {
  const [cash, setCash] = useState(0)

  useInterval(() => {
    setCash(cash + 1)
  }, 100)

  return (
    <Layout>
      <Headline>Infinitely Worse - An Adventure</Headline>
      <Profits>Cash: {cash.toExponential(1)}</Profits>
    </Layout>
  )
}

export default IndexPage
