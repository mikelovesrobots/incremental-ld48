import React, { useState } from "react"
import Layout from "components/layout"
import { typography } from "styles"
import styled from "@emotion/styled"
import { useInterval } from "beautiful-react-hooks"
import { formatShort } from "swarm-numberformat"

const Headline = styled.h1({ ...typography.headline1 })
const Profits = styled.p({ ...typography.body })

const IndexPage: React.FunctionComponent = () => {
  const [cash, setCash] = useState(10000)

  useInterval(() => {
    setCash(cash + 1)
  }, 100)

  return (
    <Layout>
      <Headline>Infinitely Worse - An Adventure</Headline>
      <Profits>Cash: {formatShort(cash)}</Profits>
    </Layout>
  )
}

export default IndexPage
