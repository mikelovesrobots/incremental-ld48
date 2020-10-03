import React from "react"
import Layout from "components/layout"
import { typography } from "styles"
import styled from "@emotion/styled"

const Headline = styled.h1({ ...typography.headline1 })
const Profits = styled.p({ ...typography.body })

const cash = 10
const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <Headline>Infinitely Worse - An Adventure</Headline>
    <Profits>Cash: {cash}</Profits>
  </Layout>
)

export default IndexPage
