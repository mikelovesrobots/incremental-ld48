import React from "react"
import Layout from "components/layout"
import { typography } from "styles"
import styled from "@emotion/styled"

const Headline = styled.h1({ ...typography.headline1 })
const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <Headline>Infinitely Worse - An Adventure</Headline>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
