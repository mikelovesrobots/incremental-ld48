import pxToRem from 'styles/helpers/pxToRem'

export type Spacing =
  | -64
  | -48
  | -36
  | -24
  | -16
  | -8
  | -4
  | 0
  | 4
  | 8
  | 16
  | 24
  | 36
  | 48
  | 64
  | 100
  | 200
  | string

const isNumber = (n: number | string): n is number =>
  typeof n === 'number' && !isNaN(n)

const spacing = (size: Spacing) => {
  if (!isNumber(size)) {
    return size
  }

  return pxToRem(size)
}

export default spacing
