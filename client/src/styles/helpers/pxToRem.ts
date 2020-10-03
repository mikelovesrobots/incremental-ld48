import toFixed from './toFixed'
const BASE_FONT_SIZE = 16

const pxToRem = (px: number): string => `${toFixed(px / BASE_FONT_SIZE, 5)}rem`

export default pxToRem
