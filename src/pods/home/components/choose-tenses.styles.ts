import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette } = theme;
const color = palette.customPalette;

export const title = css`
  font-size: 1.6rem;
  text-align: center;
`;

export const noBtn = css`
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

export const yesBtn = css`
  border-radius: 1.4rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${color.lightWhite};
  background-color: #1976d2;
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  &:hover,
  &:active {
    outline: none;
    background-color: #115293;
  }
`;
