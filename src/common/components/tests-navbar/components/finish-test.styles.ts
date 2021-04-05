import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const finishBtn = css`
  border-radius: 1.4rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${color.lightWhite};
  background-color: ${color.primaryMain};
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  &:hover,
  &:active {
    outline: none;
    background-color: ${color.primaryDark};
  }
`;