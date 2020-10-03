import {CSSObject} from '@emotion/styled'
import spacing, {Spacing} from './constants/spacing'

type PaddingFunction = (size: Spacing) => CSSObject

export interface Padding {
  [key: string]: (size: Spacing) => CSSObject
  (size: Spacing): CSSObject
  top: PaddingFunction
  right: PaddingFunction
  bottom: PaddingFunction
  left: PaddingFunction
  x: PaddingFunction
  y: PaddingFunction
}

const padding = ((size) => ({
  padding: spacing(size),
})) as Padding
padding.top = (size) => ({paddingTop: spacing(size)})
padding.right = (size) => ({paddingRight: spacing(size)})
padding.bottom = (size) => ({paddingBottom: spacing(size)})
padding.left = (size) => ({paddingLeft: spacing(size)})
padding.x = (size) => ({
  paddingLeft: spacing(size),
  paddingRight: spacing(size),
})
padding.y = (size) => ({
  paddingTop: spacing(size),
  paddingBottom: spacing(size),
})

export default padding
