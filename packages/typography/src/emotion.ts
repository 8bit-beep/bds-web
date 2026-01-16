import { css } from '@emotion/react'
import {
  typographyTokens,
  TypographyLevel,
} from './tokens'

export const typoCss = (
  level: TypographyLevel,
) => {
  return css`
    font-size: ${typographyTokens[level].size};
    font-weight: ${typographyTokens[level].weights};
  `
}
