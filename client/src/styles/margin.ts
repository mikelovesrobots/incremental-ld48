import { CSSObject } from "@emotion/styled"
import spacing, { Spacing } from "./constants/spacing"
import { breakpoint } from "styles"

type MarginFunction = (size: Spacing) => CSSObject

export interface Margin {
  [key: string]: (size: Spacing) => CSSObject
  (size: Spacing): CSSObject
  top: MarginFunction
  right: MarginFunction
  bottom: MarginFunction
  left: MarginFunction
  x: MarginFunction
  y: MarginFunction
  bottomBlade: () => CSSObject
  topOfPage: () => CSSObject
}

const margin = (size => ({
  margin: spacing(size),
})) as Margin
margin.top = size => ({ marginTop: spacing(size) })
margin.right = size => ({ marginRight: spacing(size) })
margin.bottom = size => ({ marginBottom: spacing(size) })
margin.left = size => ({ marginLeft: spacing(size) })
margin.x = size => ({ marginLeft: spacing(size), marginRight: spacing(size) })
margin.y = size => ({
  marginTop: spacing(size),
  marginBottom: spacing(size),
})

export default margin
