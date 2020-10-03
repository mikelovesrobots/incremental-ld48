import css from "@emotion/css"
import { colors } from "./"

export default css`
  body {
    color: ${colors.text};
  }

  *:focus {
    outline-color: ${colors.primary[50]};
  }
`
